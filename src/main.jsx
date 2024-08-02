import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contactpages";
import Faq from "./pages/faq";
import PosterPage from "./pages/posterlayoutpages";
import Lowtahun from "./pages/low/lowtahun";
import Kategori24 from "./pages/low/2024/kategori24";
import Jenjangonl24 from "./pages/low/2024/jenjangonl24";
import Jenjangofl24 from "./pages/low/2024/jenjangofl24";

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
  },
  {
    path: "/lowtahun",
    element: <Lowtahun />
  },
  {
    path: "/kategori24",
    element: <Kategori24 />
  },
  {
    path: "/jenjangofl24",
    element: <Jenjangofl24 />
  },
  {
    path: "/jenjangonl24",
    element: <Jenjangonl24 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
