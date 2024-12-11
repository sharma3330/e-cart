import React from "react";
import { Typography } from "@mui/material";

function ProductPrice({ price }: any) {
  return (
    <Typography variant="body2" color="text.secondary">
      {price}
    </Typography>
  );
}

export default ProductPrice;
