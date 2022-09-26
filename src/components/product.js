import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../assets/products.css";

const Product = ({ product }) => {
  return (
    <Card className="mt-5 pt-3 rounded align-items-center h-90">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image_url} />
      </Link>

      <Card.Body className="text-center">
        <Link to={`/product/${product.id}`}>
          <Card.Title className="p__title">
            <b>{product.name}</b>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <h6>{product.tagline}</h6>
        </Card.Text>
        <Card.Text as="div">
          <p>
            <b>Release Date: </b>
            {product.first_brewed}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
