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
import Kategori25 from "./pages/low/2025/kategori25";
import Jenjangonl25 from "./pages/low/2025/jenjangonl25";
import Jenjangofl25 from "./pages/low/2025/jenjangofl25";
import ListNews from "./pages/news/listnews";

// import HomeRegist from "./pages/registration/homeregist";
// import HomeIndo from "./pages/registration/homeindo";
// import HomeInter from "./pages/registration/homeinter";
// import InternationalOnline from "./pages/registration/inter-online";
// import IndonesiaOffline from "./pages/registration/indo-offline";
// import IndonesiaOnline from "./pages/registration/indo-online";
// import InternationalOffline from "./pages/registration/inter-offline";
// import Thankyou from "./pages/registration/thankyou";

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
  },
  {
    path: "/kategori25",
    element: <Kategori25 />
  },
  {
    path: "/jenjangofl25",
    element: <Jenjangofl25 />
  },
  {
    path: "/jenjangonl25",
    element: <Jenjangonl25 />
  },
  {
    path: "/listnews",
    element: <ListNews />
  },
  // {
  //   path: "/homeregist",
  //   element: <HomeRegist />
  // },
  // {
  //   path: "/homeindo",
  //   element: <HomeIndo />
  // },
  // {
  //   path: "/homeinter",
  //   element: <HomeInter />
  // },
  // {
  //   path: "/indoonline",
  //   element: <IndonesiaOnline />
  // },
  // {
  //   path: "/indooffline",
  //   element: <IndonesiaOffline />
  // },
  // {
  //   path: "/interonline",
  //   element: <InternationalOnline />
  // },
  // {
  //   path: "/interoffline",
  //   element: <InternationalOffline />
  // },
  // {
  //   path: "/thankyou",
  //   element: <Thankyou />
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
