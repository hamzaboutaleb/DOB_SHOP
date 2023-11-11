import "./assets/styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import GuestRoute from "./components/authComponents/GuestRoute";
import Error from "./components/error/Error";
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
        errorElement: <Error />,
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
  return <RouterProvider router={route} />;
}

export default App;
