"use client";

import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

interface AddToCartButtonProps {
  buttonText: string;
  product: any;
}

function AddToCartButton({ buttonText, product }: AddToCartButtonProps) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <Button
      variant="outlined"
      size="small"
      color="primary"
      sx={{ m: 1 }}
      onClick={handleAddToCart}
      disabled={product.stock === 0}
    >
      {product.stock === 0 ? "Out Of Stock" : buttonText}
    </Button>
  );
}

export default AddToCartButton;
