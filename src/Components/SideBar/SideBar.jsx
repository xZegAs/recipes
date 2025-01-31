import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        onClick={openSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-50 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div>
            <img src={logo} className="w-full" alt="logo" />
          </div>
          <ul className="space-y-4 mt-6 font-medium">
            <li className="px-4 bg-primary hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all mb-6 rounded-xl text-lg shadow-lg shadow-orange-300 font-semibold text-white">
              <Link to="/" className="flex items-center p-2 rounded-lg">
                <GiMeal />
                <span className="flex-1 ms-3 whitespace-nowrap">Meals</span>
              </Link>
            </li>
            <li className="px-4 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg">
              <Link to="/" className="flex items-center p-2 rounded-lg">
                <GiMeal />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Ingredients
                </span>
              </Link>
            </li>
            <li className="px-4 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg">
              <Link to="/" className="flex items-center p-2 rounded-lg">
                <GiMeal />
                <span className="flex-1 ms-3 whitespace-nowrap">Area</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-[40] bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default SideBar;
