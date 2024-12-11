"use client";
import React from "react";
import { Card, CardContent } from "@mui/material";
import ProductImage from "./productImage";
import ProductTitle from "./productTitle";
import ProductPrice from "./productPrice";
import AddToCartButton from "./addToCartButton";
import { ProductType } from "../globalsTypes";

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <>
      <Card
        sx={{
          width: 230,
          height: 346,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        <ProductImage image={product.image} alt={product.name} />
        <CardContent>
          <ProductTitle productName={product.name} productQuantity={product.quantity} />
          <ProductPrice price={product.price} />
        </CardContent>
        <AddToCartButton buttonText="Add To Cart" product={product}/>
      </Card>
    </>
  );
}

export default ProductCard;

