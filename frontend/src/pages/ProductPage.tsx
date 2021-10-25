import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { ProductPageType, ProductsType } from "../types";
import axios from "axios";

const ProductPage = ({ match }: ProductPageType) => {
  const [product, setProduct] = useState<ProductsType | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const res: any = await axios.get(`/api/product/${match.params.id}`);
      console.log(res.data);
      const data: ProductsType = await res.data;
      if (data) setProduct({ ...data });
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <ListGroup>
            <Image src={product?.image} alt={product?.name} fluid></Image>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product?.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {/* <Rating
                value={product?.rating}
                text={`${product?.numReviews} reviews`}
              /> */}
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {product?.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: $ {product?.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>$ {product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {/* {product?.countInStock > 0 ? "In Stock" : "Out Of Stock"} */}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2">
                <Button
                  className="btn btn-lg btn-primary"
                  type="button"
                  disabled={product?.countInStock === 0}
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
