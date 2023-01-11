import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Shelf from "./pages/Shelf/Shelf";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Product/:id",
        element: <Product />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Shelf",
        elements: <Shelf />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
