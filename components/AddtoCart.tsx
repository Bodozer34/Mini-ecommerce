import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/types/general-types";
import { Button, CardActions } from "@mui/material";
import React from "react";

interface AddToCardProps {
  product: Product;
}
function AddtoCart({ product }: AddToCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const { cart } = useCartStore();
  console.log("cart>>", cart);
  return (
    <CardActions>
      <Button variant="contained" size="small" onClick={() => addToCart(product, 1)}>
        Add to Cart
      </Button>
    </CardActions>
  );
}

export default AddtoCart;
