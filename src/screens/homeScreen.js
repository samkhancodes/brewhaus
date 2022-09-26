import React, { useState, useEffect, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import axios from "axios";
import MyPagination from "../components/pagination";

const HomeScreen = ({ productLength, filteredData }) => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(1);

  // Sets the active page number 
  const handleChangePage = useCallback((number) => {
    setActive(number);
  }, []);

  // Fetching the products by limit for pagination
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${active}&per_page=8`
      );
      setProducts(data);
    };
    fetchProducts();
  }, [active]);

  return (
    <React.Fragment>
      <h1 className="text-center py-3">Latest Products</h1>
      <Row>
        {filteredData.length > 0
          ? filteredData.map((product) => {
              return (
                <Col
                  key={product.id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="mt-3"
                >
                  <Product product={product} />
                </Col>
              );
            })
          : products.map((product) => {
              return (
                <Col
                  key={product.id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  className="mt-3"
                >
                  <Product product={product} />
                </Col>
              );
            })}
        {productLength > 0 && filteredData.length <= 0 && (
          <MyPagination
            total={productLength}
            current={active}
            handleChangePage={handleChangePage}
          />
        )}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
