"use client"
import { useProductsByCategory } from '@/hooks/useProductsByCategory'
import { useCategoryStore } from '@/store/useCategoryStore';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react'
import ProductCard from './ProductCard';

function Products() {
    const {selectedCategory}= useCategoryStore();
    const {data:productData, isLoading, isError}= useProductsByCategory();
    const products = productData?.products || [];
    console.log(products)
  return <>
  
  {
    isLoading? <Box><CircularProgress></CircularProgress></Box>: 
    <>
    {
        products?.length > 0 ? 
        <>
        <Grid container mt={5} marginLeft={5} spacing={3} sx={{ maxWidth: '1500px' }}>
            {
                products?.map((product:any, index:number)=>{
                    return(
                        <React.Fragment key={index}>
                            <ProductCard product={product}  ></ProductCard>
                        </React.Fragment>
                    )
                })
            }

        </Grid>
        </> : <><Typography>No Products</Typography></>

    }
    </>
    
  }
  
  </>;
}

export default Products