import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApartmentPage from "./components/ApartmentPage";
import About from "./components/About"

const router = createBrowserRouter([
  {
  path: "/",
    element: <App />,
  errorElement: <h1>404 not found</h1>
},
// {
//   path: "/flat",
//   element: <h1>Nos appartements</h1>
//   },
{
  path: "/about",
  element: <About />
  },
  {
  path: "/flat",
  element: <ApartmentPage />
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
