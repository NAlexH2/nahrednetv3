import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import { Bio, Experience, Projects } from "@routes/index";
import { resolveSite, type Site } from "./sites/siteFromHost";
import Landing from "./sites/landing/Landing";
import Querium from "./sites/querium/Querium";

// Alex's profile keeps its own routes; it just no longer owns the apex.
const profileRouter = createBrowserRouter([
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

const site = resolveSite();

// All three hostnames share one index.html, so the tab has to be named here
// rather than in the document head.
const TITLES: Record<Site, string> = {
  landing: "underway.sh",
  profile: "Alex Harris — Career & Bio",
  querium: "About Querium — Q",
};
document.title = TITLES[site];

const app =
  site === "profile" ? (
    <RouterProvider router={profileRouter} />
  ) : site === "querium" ? (
    <Querium />
  ) : (
    <Landing />
  );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{app}</React.StrictMode>,
);
