import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import PreparingCart from "./Components/PreparingCart/PreparingCart";
import SectionTitle from "./Components/SectionTitle";

function App() {
  const [cook, setCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [cookingTime, setCookingTime] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCook = (recipe) => {
    // Check if the recipe already exists in the cook array
    const isExist = cook.find((item) => item.id === recipe.id);
    if (!isExist) {
      const newCook = [...cook, recipe];
      setCook(newCook);
      console.log("cooking start");
    } else {
      alert("This didn't work.");
    }
  };

  const handlePreparing = (rec, time, cal) => {
    // console.log("preparing start", rec);
    const newCooking = [...currentlyCooking, rec];
    setCurrentlyCooking(newCooking); // Update state to reflect the currently cooking recipe
    console.log(newCooking);
    // Remove the recipe from the cook array
    const newCook = cook.filter((r) => r.id !== rec.id);
    setCook(newCook);

    const newTime = cookingTime + time;
    setCookingTime(newTime);

    const totalCalories = calories + cal;
    setCalories(totalCalories);
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Banner />
        <SectionTitle />
        <div className="grid lg:grid-cols-2 lg:gap-12 my-12">
          <OurRecipes recipes={recipes} handleCook={handleCook} />
          <PreparingCart
            currentlyCooking={currentlyCooking}
            handlePreparing={handlePreparing}
            cook={cook}
            calories={calories}
            cookingTime={cookingTime}
          />
        </div>
      </div>
    </>
  );
}
export default App;
