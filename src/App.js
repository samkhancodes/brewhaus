import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeScreen from "./screens/homeScreen";
import ProductScreen from "./screens/productScreen";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [productLength, setProductLength] = useState(0);
  const [filterData, setFilterData] = useState([]);

  // Fetching all the data to filter
  const fetchAllProducts = async () => {
    const { data } = await axios.get(`https://api.punkapi.com/v2/beers`);
    setProductData(data);
  };

  useEffect(() => {
    fetchAllProducts();
    setProductLength(productData.length);
  }, [productData.length, filterData]);

  // Filtering the data as the user types in search box
  const filteredData = useCallback(
    (response) => {
      if (response !== "") {
        const fData = productData.filter((resp) => {
          return resp.name.toLowerCase().indexOf(response.toLowerCase()) !== -1;
        });
        console.log(fData);
        setFilterData(fData);
      } else {
        setFilterData([]);
      }
    },
    [productData]
  );

  return (
    <Router>
      <Header data={productData} filteredData={filteredData} />
      <main className="py-3">
        <Container>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomeScreen
                  productLength={productLength}
                  filteredData={filterData}
                />
              }
            />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
