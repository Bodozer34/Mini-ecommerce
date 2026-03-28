"use client";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import CustomButton from "../components/CustomButton";
import ApiTesting from "@/components/ApiTesting";
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";
import CartPage from "@/components/CartPage";

export default function Home() {
  return (
    <>
      <Categories />
      <Products/>
      
    </>
  );
}
