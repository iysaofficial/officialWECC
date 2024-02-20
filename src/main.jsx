import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contactpages";
import Faq from "./pages/faq";
import PosterPage from "./pages/posterlayoutpages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/poster",
    element: <PosterPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
