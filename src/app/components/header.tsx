"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import LoginPage from "../login/page";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

    console.log(products);
  return (
    <AppBar position="static" sx={{ backgroundColor: "#9271c3" }}>
      <Toolbar>
        <Typography variant="h6" component="a" sx={{ flexGrow: 1}} href="/">
          MyStore
        </Typography>
        <Box
        onClick={handleOpen}
        
      >
        <IconButton size="large" color="inherit" aria-label="login">
          <PersonIcon />
        </IconButton>
      </Box>
        <Link href="/cart-page" passHref>
          <IconButton size="large" color="inherit" aria-label="cart">
            <Badge badgeContent={products.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
      <LoginPage
        handleClose={handleClose}
        handleOpen={handleOpen}
        isOpen={open}
      />
    </AppBar>
  );
};

export default Header;
