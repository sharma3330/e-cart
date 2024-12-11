import React from "react";
import { Typography } from "@mui/material";

function ProductTitle(props: any) {
  const { productName, productQuantity } = props;
  return (
    <>
      <Typography variant="body2">{productName}</Typography>
      <Typography variant="body2" sx={{ pt: 1, pb: 1 }}>
        {productQuantity}
      </Typography>
    </>
  );
}

export default ProductTitle;
