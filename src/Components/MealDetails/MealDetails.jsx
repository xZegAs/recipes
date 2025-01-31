import React from "react";
import { FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Navigate, useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";

function MealDetails() {
  const { id } = useParams();
  const { isError, isLoading, data } = useApi(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    `meals/${id}`
  );
  if (isError) {
    return <Navigate to="/" />;
  }
  if (isLoading) {
    return (
      <>
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  const meal = data.data.meals[0];
  const ingredientMeasurePairs = [];

  for (let i = 1; i <= 9; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredientMeasurePairs.push({ ingredient, measure });
    }
  }
  return (
    <>
      <div className="container p-4">
        <div className="flex gap-4 flex-col lg:flex-row ">
          <div className="lg:w-2/3">
            <h1 className="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">
              {meal.strMeal}
            </h1>
            <div className="grid gap-4 items-stretch lg:grid-cols-2">
              <div>
                <img
                  className="w-full rounded-2xl mb-8"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <ul className="flex gap-4 justify-center">
                  <li className="bg-red-600  text-white py-2 px-4 rounded-lg ">
                    <a
                      target="_blank"
                      href={meal.strYoutube}
                      className="flex gap-2 justify-center items-center"
                    >
                      {" "}
                      <FaYoutube /> youtube{" "}
                    </a>
                  </li>
                  <li className="bg-secondary  text-white py-2 px-4 rounded-lg ">
                    <a
                      target="_blank"
                      href={meal.strSource}
                      className="flex gap-2 justify-center items-center"
                    >
                      <TfiWorld /> source{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <p className="font-Pacifico">{meal.strInstructions}</p>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <div className="bg-white rounded-2xl p-4">
              <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">
                Ingredients
              </h3>
              {ingredientMeasurePairs.map((pair, index) => (
                <div
                  key={index}
                  className="flex justify-between p-2 border-b-2 last-of-type:border-b-0 "
                >
                  <span>{pair.ingredient}:</span>
                  <span>{pair.measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealDetails;
