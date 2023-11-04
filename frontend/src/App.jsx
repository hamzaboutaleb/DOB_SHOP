import "./assets/styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import product from "./services/productsApi.js";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    product.getAll();
  }, []);
  return <RouterProvider router={route} />;
}

export default App;
