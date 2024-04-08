import React from "react";
import "./styles/main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { StepOne } from "./pages/StepOne";
import { StepTwo } from "./pages/StepTwo";
import { StepFour } from "./pages/StepFour";
import { StepThree } from "./pages/StepThree";
import { Thanks } from "./pages/Thanks";

export const App = () => {

  // auto deploy test
  // auto deploy test #2
  // auto deploy test #3

  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/step-one",
      element: <StepOne />,
    },
    {
      path: "/step-two",
      element: <StepTwo />,
    },
    {
      path: "/step-three",
      element: <StepThree />,
    },
    {
      path: "/step-four",
      element: <StepFour />,
    },
    {
      path: "/thanks",
      element: <Thanks />,
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};
