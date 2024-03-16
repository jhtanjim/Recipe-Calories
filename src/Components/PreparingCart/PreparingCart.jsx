import React, { useState } from "react";

const PreparingCart = ({
  cook,
  currentlyCooking,
  handlePreparing,
  calories,
  cookingTime,
}) => {
  return (
    <div className="border rounded-xl lg:px-4">
      <h1 className="text-center text-2xl font-bold">
        Want to cook: {cook.length}
      </h1>
      <hr className="my-4 " />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <>
            <tr className="">
              <td></td>
              <td>Name</td>
              <td>Time</td>
              <td>Calories</td>
              <td>Action</td>
            </tr>
          </>

          <tbody className="bg-slate-100 rounded-2xl my-2">
            {cook.map(
              (
                rec,
                index // Move tbody outside of the map
              ) => (
                <tr key={rec.id}>
                  <th>{index + 1}</th>
                  <td>{rec.recipe_name}</td>
                  <td>{rec.preparing_time}</td>
                  <td>{rec.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handlePreparing(rec, rec.preparing_time, rec.calories);
                      }}
                      className=" bg-[#0BE58A] rounded-2xl  px-4 py-2 hover:bg-[#c2c0ff] hover:text-black font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/*  */}

      <h1 className="text-center text-2xl font-bold my-4">
        Want to cook: {currentlyCooking.length}
      </h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <>
            <tr className="">
              <td></td>
              <td>Name</td>
              <td>Time</td>
              <td>Calories</td>
            </tr>
          </>

          <tbody className="bg-slate-100 rounded-2xl my-2">
            {currentlyCooking.map((currentCook, index) => (
              <tr key={currentCook.id}>
                <th>{index + 1}</th>
                <td>{currentCook.recipe_name}</td>
                <td>{currentCook.preparing_time}</td>
                <td>{currentCook.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between font-semibold text-lg mt-4 opacity-65">
        <h1>Total Time ={cookingTime}</h1>
        <h1>Total Calories ={calories}</h1>
      </div>
    </div>
  );
};

export default PreparingCart;
