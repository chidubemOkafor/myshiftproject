import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-white divide-y divide-y-reverse fixed w-screen h-20">
      <div className="flex justify-between pt-7">
        <Link to={"./"}>
          <div className="pl-20">LOGO</div>
        </Link>
        <div className="flex gap-x-6">
          <p>
            <Link to={"./"}>
              <button>HOME</button>
            </Link>
          </p>
          <p>
            <Link to={"./AboutUs"}>
              <button>ABOUT US</button>
            </Link>
          </p>
          <p>
            <Link to={"./Shelf"}>
              <button>SHOP ALL</button>
            </Link>
          </p>

          <button className="flex">
            <p>STUFFS WE HAVE</p>
            <IoIosArrowDown className="mt-2 ml-1" />
          </button>
        </div>
        <div className="flex pr-20">
          <IoIosSearch className="h-6 w-6" />

          <HiOutlineShoppingBag className="h-6 w-6 ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
