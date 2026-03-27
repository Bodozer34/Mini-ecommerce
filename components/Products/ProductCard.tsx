import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// Ideally, define an interface for your product
interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    thumbnail?: string;
  };
}

function ProductCard({ product }: ProductProps) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.thumbnail||product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description.substring(0, 60)}...
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;