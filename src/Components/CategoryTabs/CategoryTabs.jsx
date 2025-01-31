import React from "react";
import useApi from "../../Hooks/useApi";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
function CategoryTabs() {
  const { isError, isLoading, data } = useApi(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    "categories"
  );
  const navigate = useNavigate();

  function handelSelectChange(e) {
    navigate(`/category/${e.target.value}`);
  }
  if (isError) {
    return <Navigate to="/" />;
  }
  if (isLoading) {
    return (
      <>
        <div
          role="status"
          className="max-w-md p-4  flex flex-col md:flex-row gap-4 mt-8 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse "
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
          </div>

          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  const categories = data?.data?.meals?.slice(0, 14);
  return (
    <>
      <div className="sm:hidden mt-8">
        <label htmlFor="tabs" className="sr-only">
          Select your country
        </label>
        <select
          onChange={(e) => handelSelectChange(e)}
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {categories.map((cat) => (
            <option value={cat.strCategory} key={cat.strCategory}>
              {cat.strCategory}
            </option>
          ))}
        </select>
      </div>

      <ul className="sm:flex hidden mt-8 flex-wrap gap-4  font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
          <NavLink
            to="/"
            className="inline-block catLink px-4 py-2  border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            All
          </NavLink>
        </li>
        {categories.map((cat) => (
          <li className="me-2" key={cat.strCategory}>
            <NavLink
              to={`/category/${cat.strCategory}`}
              className="   inline-block px-4 py-2 catLink border-gray-400 border transition-all hover:shadow-xl shadow duration-300  rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              {cat.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryTabs;
