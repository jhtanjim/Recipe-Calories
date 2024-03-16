import React, { useEffect, useState } from "react";
import OurRecipe from "./OurRecipe";

const OurRecipes = ({ handleCook, recipes }) => {
  return (
    <div className="">
      {/*  */}

      <div className="">
        <div className="grid lg:grid-cols-2 lg:gap-4">
          {recipes.map((recipe) => (
            <OurRecipe
              key={recipe.id}
              handleCook={handleCook}
              recipe={recipe}
            ></OurRecipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
