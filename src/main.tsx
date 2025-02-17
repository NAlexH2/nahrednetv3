import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { App, About } from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about/",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
