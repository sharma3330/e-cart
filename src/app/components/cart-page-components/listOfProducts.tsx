import React from 'react'
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    Typography
  } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ProductType } from '../../globalsTypes';
import RemoveIcon from "@mui/icons-material/Remove";

function ListOfProducts(props:any) {
    const {cartItems, handleDecrement, handleIncrement, calculateTotalPrice, handleRemove} = props;
  return (
    <>
        <List sx={{ margin: 3 }}>
            {cartItems.map((product: ProductType) => (
              <ListItem
                key={product.id}
                sx={{
                  borderBottom: "1px solid #ddd",
                  padding: "16px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    style={{ marginRight: 16 }}
                  />
                  <ListItemText
                    primary={product.name}
                    secondary={`${product.description}`}
                    sx={{ color: "black", width: "500px" }}
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleIncrement(product.id)}
                    disabled={product.stock <= product.quantity}
                  >
                    <AddIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ margin: "0 8px", color: "black" }}
                  >
                    {product.quantity}
                  </Typography>
                  <IconButton
                    color="primary"
                    onClick={() => handleDecrement(product.id)}
                    disabled={product.stock <= 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: 4, color: "black", marginRight: 4 }}
                  >
                    {calculateTotalPrice(product.price, product.quantity)}
                  </Typography>
                  <IconButton
                    color="error"
                    edge="end"
                    onClick={() => handleRemove(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
    </>
  )
}

export default ListOfProducts;