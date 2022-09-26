import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import axios from "axios";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // To call API to fetch all the data
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `https://api.punkapi.com/v2/beers/${id}`
      );
      setProduct(data[0]);
    };
    fetchProduct();
  }, [id]);
  return (
    <React.Fragment>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col md={4} className="text-center prod-image">
          <Image src={product.image_url} alt={product.name} fluid />
        </Col>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Release Date:</b> {product.first_brewed}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Description:</b> {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Brewer Tips:</b> {product.brewers_tips}
            </ListGroup.Item>

            <ListGroup.Item>
              <b>Contributed by:</b> {product.contributed_by}
            </ListGroup.Item>
          </ListGroup>

          <Card className="mt-5">
            <ListGroup>
              <ListGroup.Item>
                <h3>Ingredients</h3>
              </ListGroup.Item>
              <Row className="text-center">
                <Col>
                  <h5>Malt</h5>
                  {product &&
                    product.ingredients &&
                    product.ingredients.malt &&
                    product.ingredients.malt.map((item, i) => {
                      return (
                        <ListGroup.Item key={i}>
                          <Row>
                            <Col>
                              <b>{item.name}</b>
                            </Col>

                            <Col>
                              <b>{item.amount.value} </b>
                              <span>({item.amount.unit})</span>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                </Col>

                <Col>
                  <h5>Hop</h5>
                  {product &&
                    product.ingredients &&
                    product.ingredients.hops &&
                    product.ingredients.hops.map((item, i) => {
                      return (
                        <ListGroup.Item key={i}>
                          <Row>
                            <Col>
                              <b>{item.name}</b>
                            </Col>

                            <Col>
                              <b>{item.amount.value} </b>
                              <span>({item.amount.unit})</span>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                </Col>
              </Row>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductScreen;
