"use client";
import { useCategories } from "@/hooks/useCategories";
import { CategoryType } from "@/types/general-types";
import Category from "./CategoryUI";
import { Grid } from "@mui/material";
import React from "react";
import CategoryUI from "./CategoryUI";




function Categories() {
  const { data: categories, isLoading, isError, error } = useCategories();
  console.log("cate-data", categories?.slice(0, 6));

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return( <>
    <Grid container maxWidth={"lg"} sx={ {mx:"auto", border:"1px solid #222"}}>
      {categories?.slice(0, 6).map((category: CategoryType, index:number) => {
        return (
          <React.Fragment key={index}>
         <CategoryUI category={category} index={index}/>
          </React.Fragment>
        );
      })}
    </Grid>
  </>);;
 
}

export default Categories;
