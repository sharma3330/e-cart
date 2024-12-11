import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import ProductCard from "./productCard";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { ProductType } from "../globalsTypes";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const ProductList = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  useEffect(() => {
    socket = io(`${process.env.NEXT_PUBLIC_API}`); // Initialize socket connection

    // Emit the getProducts event to the backend
    socket.emit("getProducts");

    // Listen for product list updates from the backend
    socket.on("productList", (updatedProducts) => {
      setProducts(updatedProducts);
    });

    // Clean up the socket connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="flex-start" gap={3}>
        {products &&
          products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Box>
    </Box>
  );
};

export default ProductList;
