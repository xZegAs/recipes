import React from "react";
import Meal from "../Meal/Meal";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import useApi from "../../Hooks/useApi";
import { Navigate } from "react-router-dom";

function AllMeals({ endpoint, queryKey }) {
  const { isError, isLoading, data } = useApi(
    `https://www.themealdb.com/api/json/v1/1/${endpoint}`,
    queryKey
  );

  if (isError) return <Navigate to="/" />;
  if (isLoading) return <SkeletonLoader />;
  return (
    <>
      <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
        {data?.data?.meals?.map((meal) => (
          <Meal key={meal.idMeal} mealData={meal} />
        ))}
      </div>
    </>
  );
}

export default AllMeals;
