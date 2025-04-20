import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Flag from "react-world-flags";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/hist-academy", element: <HistAcademyPage /> },
    ],
  },
  { path: "/admission", element: <AdmissionPage /> },
]);

import HomePage from "./pages/HomePage";
import HistAcademyPage from "./pages/HistAcademyPage";
import AdmissionPage from "./pages/AdmissionPage";

const App = () => {
  return (
    // <div className="font-sans text-gray-800 bg-white">
    //   {/* <button className="fixed bottom-4 right-8 bg-[#c9ab88] text-2xl text-white z-50 w-fit !px-4 !py-2 rounded-full shadow-xl hover:bg-[#b89a77] transition">
    //     <div className="flex items-center justify-center gap-1">
    //       <Flag code="GB" className=" h-5" />
    //       <span className="flex-shrink-0">EN</span>
    //     </div>
    //   </button> */}

    //   <HomePage />
    // </div>
    <RouterProvider router={router} />
  );
};

export default App;
