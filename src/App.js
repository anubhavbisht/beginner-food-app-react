import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import OfflineOnlinePopup from "./components/OfflineOnlinePopup";
import LoadingPage from "./components/LoadingPage";
import "../index.css";

const ShoppingCart = lazy(() => import("./components/ShoppingCart"));

const AppLayout = () => {
  console.log("App rendered....");
  return (
    <div className="app">
      <OfflineOnlinePopup />
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ShoppingCart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={appRouter} />);
