//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import MainLayout from "./layout/MainLayout";
// pages
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
// components
import Navbar from "./components/Navbar";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "invoice/:id",
          element: <Invoice />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
