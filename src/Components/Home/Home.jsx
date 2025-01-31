import React from "react";
import AllMeals from "../AllMeals/AllMeals";
import CategoryTabs from "../CategoryTabs/CategoryTabs";

function Home() {
  return (
    <>
      <div className="container py-8 px-4">
        <h1 className="text-4xl font-bold  bg-gradient-to-r from-primary via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent">
          Learn, Cook, Eat Your Food
        </h1>
        <CategoryTabs />
        <AllMeals endpoint="search.php?s=" queryKey="allMeals" />
      </div>
    </>
  );
}

export default Home;
