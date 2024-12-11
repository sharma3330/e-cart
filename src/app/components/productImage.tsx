import React from "react";
import { CardMedia } from "@mui/material";

export default function ProductImage(props: any) {
  return (
    <CardMedia
      component="img"
      height="180"
      width ="180"
      {...props}
    />
  );
}
