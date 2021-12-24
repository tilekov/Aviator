import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

// import { Button } from "antd";

import { productsContext } from "../../contexts/productsContext";
import Likes from "../Likes/Likes";
import Comment from "../Comments/Comment"

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        border: "2px solid grey",
        borderRadius: "25px",
        boxShadow: "3px 3px grey",
        padding: "30px",
        marginRight: "50px",
        marginLeft: "50px",
        backgroundColor: "#c9c9c98a",
      }}
    >
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "25%", marginRight: "100px" }}>
              <img
                style={{ marginBottom: "10px" }}
                width="100%"
                src={product.photo1}
                alt=""
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img width="48%" src={product.photo2} alt="" />
                <img width="48%" src={product.photo3} alt="" />
              </div>
            </div>
            <div style={{ width: "40vw" }}>
              <h2>{product.title}<Likes/></h2>
              <h2>{"$" + product.price}</h2>
              {/* <Button
                size="large"
                style={{
                  margin: "20px 0px",
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                ADD TO CART
              </Button> */}
              <div style={{marginTop:"30px"}}>{product.description}</div>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
        <Comment />
    </div>
  );
};

export default DetailsProduct;
