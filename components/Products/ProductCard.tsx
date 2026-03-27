import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AddtoCart from "../AddtoCart";
import { Product } from "@/types/general-types";


interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  return (
    <Grid size={{ xs: 6, md: 3 }}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={product.thumbnail}
          alt={product.title}
          sx={{ objectFit: "contain", p: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description.substring(0, 60)}...
          </Typography>
          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="primary">
              ${product.price}
            </Typography>
            <AddtoCart product={product} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;
