import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const OurRecipe = ({ recipe, handleCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="">
      <div className="card lg:w-96 mx-4 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={recipe_image} className=" rounded-xl" />
        </figure>
        <div className="card-body   ">
          <h2 className="card-title font-bold">{recipe_name}</h2>
          <span className="font-semibold opacity-60">{short_description}</span>

          <hr />
          <h1 className="font-semibold text-lg">
            Ingredients :{ingredients.length}
          </h1>
          {ingredients.map((ingredient, idx) => (
            <span key={idx} className="me-2 font-semibold opacity-60">
              * {ingredient}
            </span>
          ))}

          <hr />

          <div className="flex gap-4">
            <span className="flex gap-1 ">
              {" "}
              <CiClock2 className="my-auto" /> {preparing_time} minutes
            </span>
            <span className="flex gap-1 ">
              {" "}
              <FaFire className="my-auto" /> {calories} calories
            </span>
          </div>
          <button
            onClick={() => handleCook(recipe)}
            className="bg-[#0BE58A] rounded-2xl  px-4 py-2 hover:bg-[#c2c0ff] hover:text-black font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            Want to cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurRecipe;
