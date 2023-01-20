import Products from "../Products/Products";
import { useEffect, useState } from "react";

const Hoodies = (props) => {
  const [title, setTitle] = useState("HOODIES");
  const [category, setCategory] = useState(false);
  const [channel, setChannel] = useState(
    "sub-categories?populate=*&[filters][id][$eq]=1"
  );
  useEffect(() => {
    setCategory(true);
    setTitle("HOODIES");
  }, []);

  return (
    <>
      <Products
        channel={channel}
        setChannel={setChannel}
        title={title}
        setTitle={setTitle}
        category={category}
        setCategory={setCategory}
      />
    </>
  );
};
export default Hoodies;
