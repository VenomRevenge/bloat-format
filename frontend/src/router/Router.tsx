import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Format1v1v from "../Format1v1v";
import NotFound404 from "./NotFound";
import React from "react";
import Header from "../Header";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/format1v1v',
        element: <Format1v1v />,
      }
    ]
  },

]);

export function Router(): React.JSX.Element {
  return <RouterProvider router={router} />;
};

