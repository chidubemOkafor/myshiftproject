import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosSearch,
  IoClose,
} from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [cartNumber, setCartNumber] = useState(0);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    // this code makes sure that you can close by clicking ouside
    if (typeof document !== "undefined") {
      const handleMouseDown = (event) => {
        if (!menuRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleMouseDown);
      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [menuRef]);
  const handleOpen1 = () => setOpen1(!open1); //this is a different open for a different function

  const handleOpen = () => setOpen(!open);
  const hover = "hover:underline";
  return (
    <>
      {open1 ? (
        <div>
          <div className="h-screen fixed backdrop-brightness-50 w-full ">
            <div className="w-full  absolute h-20 bg-white">
              <div className=" flex justify-center">
                <div className="w-[45em] my-5 border-black rounded-md h-[2.8em] border-2">
                  {" "}
                  <input
                    className=" placeholder:w-20  pl-4 w-[42em] outline-none"
                    type="text"
                    placeholder="Search.."
                  />
                  <button>
                    <IoIosSearch className="mt-2 ml-2 h-6 w-6" />
                  </button>
                </div>

                <button onClick={handleOpen1}>
                  <MdClose className="ml-2 h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className=" bg-white shadow-sm w-full h-20">
        <div className="flex justify-between pt-7">
          <Link to={"./"}>
            <div className="pl-20">LOGO</div>
          </Link>
          <div className="flex gap-x-6">
            <p>
              <Link to={"./"}>
                <button className={hover}>HOME</button>
              </Link>
            </p>
            <p>
              <Link to={"./AboutUs"}>
                <button className={hover}>ABOUT US</button>
              </Link>
            </p>
            <p>
              <Link to={"./Products"}>
                <button className={hover}>SHOP ALL</button>
              </Link>
            </p>
            <div ref={menuRef} className="">
              <button className="flex hover:underline" onClick={handleOpen}>
                <p>STUFFS WE HAVE</p>
                {open ? (
                  <IoIosArrowUp className="mt-2 ml-1" />
                ) : (
                  <IoIosArrowDown className="mt-2 ml-1" />
                )}
              </button>
              {open ? (
                <div className="pl-6 pt-2">
                  <div className="flex flex-col pl-3 py-3 pr-10 gap-y-4 absolute bg-white border-2">
                    <Link to="/Products/Hoodies">
                      <button className={hover}>HOODIES</button>
                    </Link>
                    <Link to="/Products/T-shirts">
                      <button className={hover}>T-SHIRTS</button>
                    </Link>
                    <Link to="/Products/Jackets">
                      <button className={hover}>JACKETS</button>
                    </Link>
                    <Link to="/Products/Socks">
                      <button className={hover}>SOCKS</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className="flex pr-20">
            <button onClick={handleOpen1}>
              <IoIosSearch className="h-5 w-5" />
            </button>
            <Link to={"./Cart"}>
              <div className="bg-red-600 rounded-full text-white text-sm font-bold h-4 w-4 flex justify-center items-center">
                {cartNumber}
              </div>
              <HiOutlineShoppingBag className="h-6 w-6 ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
