import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import productsList from "../products";

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {productsList.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={2}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
