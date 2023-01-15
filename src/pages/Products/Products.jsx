import React, { useState, useEffect, useRef } from "react";
import Card from "../../components/Cards/Card";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";

const Products = (prop) => {
  //hooks

  const [isOpen, setIsOpen] = useState(false);
  const [channel, setChannel] = useState("Products?populate=*");
  const [value, setValue] = useState("Inventory");
  const menuRef = useRef();

  useEffect(() => {
    if (typeof document !== "undefined") {
      const handleMouseDown = (event) => {
        if (!menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleMouseDown);
      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [menuRef]);

  const { data, error, loading } = FetchStrapiData(
    `http://localhost:1337/api/${channel}`,
    "15262b76e81005a153caa1620e297eb64dd64895e23d6119c58b84dbde32ba484c4ca700db33caa90724c4e98041bb7d09a088f3f2d06aa711b1767876ef8429bcaaa6d2006cfc4e7d3efef631055699e138c7d5db74f8a50df1bcf47d69ef9b4fe4ef28e511ebcc43501ce1c95c08573a6ef0b30da34b643af07ff38de43b63"
  );
  console.log(data);

  // functions
  const handleOpen = () => setIsOpen(!isOpen);
  function handleFeatured() {
    setChannel(`Products?populate=*&[filters][type][$eq]=featured`);
    setValue("Featured");
    setIsOpen(false);
  }
  function handleInventory() {
    setChannel("Products?populate=*");
    setValue("Inventory");
    setIsOpen(false);
  }
  function handleTrending() {
    setChannel("Products?populate=*&[filters][type][$eq]=trending");
    setValue("Trending");
    setIsOpen(false);
  }

  //styles
  const dropdownHover = "hover:bg-slate-200";
  const icon = "mt-2 ml-1";
  return (
    <div className="divide-y ">
      <div className="pb-[1em] flex justify-center font-bold text-4xl py-[1.5em] pb-[1.5em] ">
        <h4>{prop.title}</h4>
      </div>
      <div className="">
        <div className="flex justify-center gap-x-[54.5em] py-4">
          <div ref={menuRef} className="flex pr-2">
            <p>sort by:</p>
            <button onClick={handleOpen} className="flex gap-3">
              <p>{value}</p>
              {isOpen ? (
                <IoIosArrowUp className={icon} />
              ) : (
                <IoIosArrowDown className={icon} />
              )}
            </button>

            {isOpen ? (
              <div className="absolute mt-[2.5em] ml-[4.5em] ">
                <div className="bg-white drop-shadow-2xl border-2 pl-3 w-[8em] divide-y  items-center rounded-sm">
                  <button onClick={handleInventory} className={dropdownHover}>
                    Inventory
                  </button>
                  <button onClick={handleFeatured} className={dropdownHover}>
                    Featured
                  </button>
                  <button onClick={handleTrending} className={dropdownHover}>
                    Trending
                  </button>
                  <button className={dropdownHover}>Best selling</button>
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div>{data.length} products</div>
        </div>
      </div>
      <div>
        <Card data={data} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default Products;
