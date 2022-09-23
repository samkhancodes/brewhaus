import React from "react";
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  
  return (
    <Card className="my-3 rounded ">
      <Link to={`/product/${product.id}`} >
        <Card.Img variant="top" src={product.image_url} />
      </Link>

      <Card.Body>
      <Link to={`/product/${product._id}`} >
          <Card.Title>
            <b>{product.name}</b>
          </Card.Title>
        </Link>
        <Card.Text as = 'div'>
          <h6>{product.tagline}</h6>
        </Card.Text>
        <Card.Text as='div' >
            <p><b>Release Date: </b>{product.first_brewed}</p>
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Product;
