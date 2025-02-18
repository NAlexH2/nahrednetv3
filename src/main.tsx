import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { Bio, Experience, Projects } from "@routes/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Bio />,
  },
  {
    path: "experience/",
    element: <Experience />,
  },
  {
    path: "projects/",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
