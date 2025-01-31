import React from "react";
import { useParams } from "react-router-dom";
import AllMeals from "../AllMeals/AllMeals";
import CategoryTabs from "../CategoryTabs/CategoryTabs";

function MealsByCategory() {
  const { name } = useParams();
  return (
    <>
      <div className="container py-8 px-4">
        <h1 className="text-4xl font-bold font-Pacifico bg-gradient-to-r from-primary   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent">
          Learn, Cook, Eat Your Food
        </h1>
        <CategoryTabs />
        <AllMeals endpoint={`filter.php?c=${name}`} queryKey={name} />
      </div>
    </>
  );
}

export default MealsByCategory;
