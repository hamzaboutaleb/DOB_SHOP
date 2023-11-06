import "./assets/styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login/Login";
import GuestRoute from "./components/authComponents/GuestRoute";

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
        path: "register",
        element: <h1>Register</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
