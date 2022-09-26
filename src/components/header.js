import React, { useCallback } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./searchBar";

const Header = ({ filteredData }) => {

  /* 
  This call back function is used to get response from Search Bar
  and then pass it to App.js
  */ 
  const responseData = useCallback(
    (response) => {
      filteredData(response);
    },
    [filteredData]
  );
  return (
    <Navbar variant="dark" bg="dark" expand="lg" collapseOnSelect>
      <Container className="py-3 mobile">
        {/* Logo and Title */}
        <LinkContainer to="/">
          <div className="d-flex align-items-center logo" href="#home">
            <div>
              <img src="../assets/beer-mug.svg" alt="Logo" />
            </div>
            <div>
              <h2
                style={{
                  color: "White",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Brewhaus
              </h2>
            </div>
          </div>
        </LinkContainer>
        {/* Search Box */}
        <div>
          <SearchBar responseData={responseData} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
