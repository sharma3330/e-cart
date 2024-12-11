"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromCart, updateQuantity } from "../../redux/slices/cartSlice";
import { List, Typography } from "@mui/material";
import io from "socket.io-client";
import ListOfProducts from "../components/cart-page-components/listOfProducts";
import TotalAmountAndCheckout from "../components/cart-page-components/totalAmountAndCheckout";
import AlertMessage from "../components/cart-page-components/alertMessage";
 

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.products);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id: string) => {
    dispatch(updateQuantity({ id, amount: 1, status: "increment" })); // Increment by 1
  };
  const handleDecrement = (id: string) => {
    dispatch(updateQuantity({ id, amount: 1, status: "decrement" })); // Decrement by 1
  };

  const calculateTotalPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, product) =>
        total + calculateTotalPrice(product.price, product.quantity),
      0
    );
  };

  const handleCheckout = () => {
    const socket = io(process.env.NEXT_PUBLIC_API);
    if (!socket) return;

    // Emit stock update for each product in the cart
    cartItems.forEach((product) => {
      const updatedStock = product.stock - product.quantity; // Calculate new stock
      socket.emit("updateStock", product.id, updatedStock); // Notify backend
    });

    // Show success message
    setSuccessMessage(true);
    router.push("/");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ margin: 3 }}>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ color: "black", textAlign: "center" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <List sx={{ margin: 3 }}>
            <ListOfProducts
              cartItems={cartItems}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              calculateTotalPrice={calculateTotalPrice}
              handleRemove={handleRemove}
            />
          </List>
          <TotalAmountAndCheckout
            getTotalAmount={getTotalAmount}
            handleCheckout={handleCheckout}
          />
        </>
      )}
      <AlertMessage
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
    </div>
  );
};

export default CartPage;
