import "./assets/styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login/Login";
import GuestRoute from "./components/authComponents/GuestRoute";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import { useEffect } from "react";
import { getBySlug } from "./services/productsApi";
const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <Register />
          </GuestRoute>
        ),
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    getBySlug("women-slippers").then((data) => {
      console.log(data);
    });
  }, []);
  return <RouterProvider router={route} />;
}

export default App;
