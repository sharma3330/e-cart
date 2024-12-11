"use client";

import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function TotalAmountAndCheckout(props: any) {
    const {getTotalAmount, handleCheckout} = props;
  return (
    <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "16px 24px",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Total Amount: ₹{getTotalAmount()}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              sx={{ padding: "8px 24px" }}
            >
              Checkout
            </Button>
          </Box>
  )
}

export default TotalAmountAndCheckout