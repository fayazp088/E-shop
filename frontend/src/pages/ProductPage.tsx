import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import productsList from "../products";
import Rating from "../components/Rating";
import { ProductPageType } from "../types";

const ProductPage = ({ match }: ProductPageType) => {
  console.log(match);
  const { image, name, rating, numReviews, price, description, countInStock } =
    productsList.find((e) => e._id === match.params.id)!;

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {price}</ListGroup.Item>
            <ListGroup.Item>Description: $ {description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>$ {price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2">
                <Button
                  className="btn btn-lg btn-primary"
                  type="button"
                  disabled={countInStock === 0}
                >
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
