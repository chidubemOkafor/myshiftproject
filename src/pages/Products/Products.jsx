import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Card1 from "../../components/Cards/Card1";
import Card from "../../components/Cards/Card";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";

const Products = (prop) => {
  //hooks

  const [isOpen, setIsOpen] = useState(false);

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

  //this is calling the get request for strapi
  const { data, error, loading } = FetchStrapiData(prop.channel);

  console.log(data);

  // functions(this codes are not optimized you might get confused) it could have been done with less code
  const handleOpen = () => setIsOpen(!isOpen);
  function handleFeatured() {
    prop.setChannel(`Products?populate=*&[filters][sub_categories][$eq]=socks`);
    setValue("Featured");
    setIsOpen(false);
  }
  function handleInventory() {
    prop.setChannel("Products?populate=*");
    setValue("Inventory");
    setIsOpen(false);
  }
  function handleTrending() {
    prop.setChannel("Products?populate=*&[filters][type][$eq]=trending");
    setValue("Trending");
    setIsOpen(false);
  }

  //styles
  const dropdownHover = "hover:bg-slate-200";
  const icon = "mt-2 ml-1";
  return (
    <div className="divide-y ">
      <div className="pb-[1em] flex justify-center font-bold text-4xl py-[1.5em]">
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
          <div> products</div>
        </div>
      </div>
      <div>
        {prop.category ? (
          <Card1 data={data} error={error} loading={loading} />
        ) : (
          <Card data={data} error={error} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Products;
