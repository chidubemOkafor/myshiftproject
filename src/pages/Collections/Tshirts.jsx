import Products from "../Products/Products";
import { useEffect, useState } from "react";

const Tshirts = () => {
  const [title, setTitle] = useState("T-SHIRTS");
  useEffect(() => {
    setTitle("T-SHIRTS");
  }, []);

  return (
    <>
      <Products
        channel="Products?populate=*&[filters][type][$eq]=tshirts"
        title={title}
        setTitle={setTitle}
      />
    </>
  );
};
export default Tshirts;
