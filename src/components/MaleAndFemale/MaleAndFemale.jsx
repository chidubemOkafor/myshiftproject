import React from "react";
import { Link } from "react-router-dom";
const MaleAndFemale = () => {
  const style =
    "h-14 mx-auto bg-black text-white w-32 hover:bg-white hover:text-black";
  return (
    <div className="flex justify-center pb-10 pt-5">
      <div className="bg-cover bg-[url(https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)] bg-no-repeat bg-local bg-center h-[30em] w-full flex justify-center items-center">
        <Link to={"./Products"}>
          <button className={style}>Male</button>
        </Link>
      </div>
      <div className="bg-cover bg-[url(https://images.pexels.com/photos/7680221/pexels-photo-7680221.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load)] bg-no-repeat bg-local white bg-center h-[30em] w-full flex justify-center items-center">
        <Link to={"./Products"}>
          <button className={style}>Female</button>
        </Link>
      </div>
    </div>
  );
};

export default MaleAndFemale;
