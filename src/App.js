import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Cart from "./pages/Cart/Cart";
import Shelf from "./pages/Shelf/Shelf";
import Hoodies from "./pages/Collections/Hoodies";
import Jackets from "./pages/Collections/Jackets";
import Socks from "./pages/Collections/Socks";
import Tshirts from "./pages/Collections/Tshirts";
import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
let Title;
const Layout = ({ setTitle, setChannel }) => {
  return (
    <div>
      <Navbar setTitle={setTitle} setChannel={setChannel} />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const [channel, setChannel] = useState("Products?populate=*");
  const [title, setTitle] = useState("SHOP ALL");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setTitle={setTitle} setChannel={setChannel} />,
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
          element: (
            <Products
              title={title}
              setTitle={setTitle}
              channel={channel}
              setChannel={setChannel}
            />
          ),
        },
        {
          path: "/Products/Hoodies",
          element: <Hoodies setTitle={setTitle} />,
        },
        {
          path: "/Products/T-shirts",
          element: <Tshirts />,
        },
        {
          path: "/Products/Jackets",
          element: <Jackets />,
        },
        {
          path: "/Products/Socks",
          element: <Socks />,
        },
        {
          path: "/AboutUs",
          element: <AboutUs />,
        },
        {
          path: "/Shelf",
          element: <Shelf />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
