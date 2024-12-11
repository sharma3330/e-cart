"use client"
import React, { useState } from 'react'
import { Box, Card, CardMedia, CardContent, Typography, Button, Grid, IconButton } from '@mui/material';

function QuantityAdjuster() {
    const [quantity, setQuantity] = useState<number>(1);
    const handleIncrease = () => setQuantity((prev: number) => prev + 1);
    const handleDecrease = () => setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                <IconButton
                  color="primary"
                  onClick={handleDecrease}
                  sx={{ padding: 0 }}
                >
                  -
                </IconButton>
                <Typography variant="body2" sx={{ mx: 2 }}>
                  {quantity} {/* Display the quantity */}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={handleIncrease}
                  sx={{ padding: 0 }}
                >
                  +
                </IconButton>
              </Box>
  )
}

export default QuantityAdjuster