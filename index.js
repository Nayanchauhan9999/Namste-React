import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import ErrorPage from "./src/Components/ErrorPage";
import "./src/styles/swiggy.scss";
import HomePage from "./HomePage";
import RestaurantDetails from "./src/Components/RestaurantDetail"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id" , element:<RestaurantDetails/>}
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
