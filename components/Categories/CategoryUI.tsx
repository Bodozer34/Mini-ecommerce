
import { categoriesImages } from "@/Dummydata/cateImages";
import { useCategoryStore } from "@/store/useCategoryStore";
import { CategoryType } from "@/types/general-types";
import { CenterFocusStrong, WidthFull } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

interface CategoryProps {
  category: CategoryType;
  index: number;
}

function CategoryUI({ category, index }: CategoryProps) {
  const { selectedCategory,setSelectedCategory } = useCategoryStore();

  let lastChild= categoriesImages.length - 1=== index;
//  console.log(selectedCategory)
  let isActive = selectedCategory === category.slug;
  return (
    <Grid
      size={{ xs: 6, sm: 3, md: 2 }}
      sx={{
        textAlign: "center",
        py: 5,
        position: "relative",
        background: isActive ?'#27a5dc' : "transparent",
        "&::before": {
          content: "''",
          width: "1px",
          height: "90px",
          background:lastChild? "transparent": "#222",
          position: "absolute",
          right: 0,
        },
        "&::after": {
          content: "''",
          position: "absolute",
          border: isActive ? "20px solid transparent" : 0,
          borderTopColor: '#27a5dc',
          bottom: "-40px",
          width: "0",
          left: "0",
          right: "0",
          margin: "auto",
        },
      }}
      onClick={()=> setSelectedCategory(category.slug)}
    >
      <Image
        src={categoriesImages[index]}
        alt="img"
        width={400}
        height={400}
        className="w-10 h-10 mx-auto rounded-3xl"
      />
      <h4 className={` mt-2 text-sm ${isActive ? "text-white" : "text-black"}`}>
        {category.name}
      </h4>
    </Grid>
  );
}

export default CategoryUI;
