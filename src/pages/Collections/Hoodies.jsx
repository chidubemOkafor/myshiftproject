import Products from "../Products/Products";
import { useEffect, useState } from "react";

const Hoodies = (props) => {
  const [title, setTitle] = useState("HOODIES");
  useEffect(() => {
    setTitle("HOODIES");
  }, []);

  return (
    <>
      <Products
        channel="Products?populate=*&[filters][type][$eq]=hoodies"
        title={title}
        setTitle={setTitle}
      />
    </>
  );
};
export default Hoodies;
