import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
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
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const [channel, setChannel] = useState("Products?populate=*");
  const [category, setCategory] = useState(false);
  const [title, setTitle] = useState("SHOP ALL");

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
          element: (
            <Products
              title={title}
              setTitle={setTitle}
              channel={channel}
              setChannel={setChannel}
              category={category}
              setCategory={setCategory}
            />
          ),
        },
        {
          path: "/Products/Hoodies",
          element: <Hoodies />,
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
