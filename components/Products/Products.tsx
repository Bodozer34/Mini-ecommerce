"use client";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  const { selectedCategory } = useCategoryStore();
  const { data: productData, isLoading, isError } = useProductsByCategory();
  const products = productData?.products || [];
  console.log(products);
  return (
    <>
      {isLoading ? (
        <Box>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <>
          {products?.length > 0 ? (
            <>
              <Grid
                container
                maxWidth={"lg"}
                spacing={{xs: 1, sm: 3}}
                sx={{ mt: 5, mx: "auto", p: {xs: 2, md: 4, lg: 0} }}
              >
                {products?.map((product: any, index: number) => {
                  return (
                    <React.Fragment key={index}>
                      <ProductCard product={product}></ProductCard>
                    </React.Fragment>
                  );
                })}
              </Grid>
            </>
          ) : (
            <>
              <Typography>No Products</Typography>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Products;
