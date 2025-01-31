import "./App.css";
import React from "react";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import MealsByCategory from "./Components/MealsByCategory/MealsByCategory";
import MealDetails from "./Components/MealDetails/MealDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:name", element: <MealsByCategory /> },
      { path: "meal/:id", element: <MealDetails /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
