import Products from "../Products/Products";
import { useEffect, useState } from "react";

const Socks = () => {
  const [title, setTitle] = useState("SOCKS");
  useEffect(() => {
    setTitle("SOCKS");
  }, []);

  return (
    <>
      <Products
        channel="Products?populate=*&[filters][type][$eq]=socks"
        title={title}
        setTitle={setTitle}
      />
    </>
  );
};
export default Socks;
