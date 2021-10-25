import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import { ProductTypeList, ProductsType } from "../types";

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductTypeList | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res: any = await axios.get("/api/products");
      const data: ProductTypeList = res.data;
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products instanceof Array
          ? products &&
            products.map((product: ProductsType) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={2}>
                  <Product {...product} />
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
};

export default HomeScreen;
