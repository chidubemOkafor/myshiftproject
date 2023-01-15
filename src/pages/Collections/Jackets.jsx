import Products from "../Products/Products";
import { useEffect, useState } from "react";

const Jackets = () => {
  const [title, setTitle] = useState("JACKETS");
  useEffect(() => {
    setTitle("JACKETS");
  }, []);

  return (
    <>
      <Products
        channel="Products?populate=*&[filters][type][$eq]=jackets"
        title={title}
        setTitle={setTitle}
      />
    </>
  );
};
export default Jackets;
