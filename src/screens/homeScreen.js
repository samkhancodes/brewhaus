import React, { useState, useEffect, useRef, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import axios from "axios";
import MyPagination from "../components/pagination";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(1);
  const [productLength, setProductLength] = useState(0);
  const [productData, setProductData] = useState([]);

  const fetchAllProducts = async () => {
    const { data } = await axios.get(`https://api.punkapi.com/v2/beers`);
    setProductData(data);
  };

  const handleChangePage = useCallback((number) => {
    console.log(number, "number");
    setActive(number);
  });

  useEffect(() => {
    fetchAllProducts();
    setProductLength(productData.length);
  }, []);

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
      {console.log(active)}
      <h1 className="text-center py-3">Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
        {productLength > 0 && (
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
