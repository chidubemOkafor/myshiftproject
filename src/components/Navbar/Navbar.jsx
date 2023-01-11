import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartFiled, setCartSign] = useState(false);

  const handleCart = () => !cartFiled;
  return (
    <div className=" bg-white shadow-sm fixed w-screen h-20">
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
            <Link to={"./Products"}>
              <button>SHOP ALL</button>
            </Link>
          </p>

          <button className="flex">
            <p>STUFFS WE HAVE</p>
            <IoIosArrowDown className="mt-2 ml-1" />
          </button>
        </div>
        <div className="flex pr-20">
          <IoIosSearch className="h-5 w-5" />
          <Link to={"./Cart"}>
            <div className="bg-red-600 rounded-full text-white text-sm font-bold h-4 w-4 flex justify-center items-center">
              {cartNumber}
            </div>
            <HiOutlineShoppingBag className="h-6 w-6 ml-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
