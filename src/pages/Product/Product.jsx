import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Product = () => {
  const [selected, setSelected] = useState(null);
  const [val, setVal] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const { id } = useParams();
  const inc = () => setVal(val + 1);
  const dec = () => (val === 1 ? setVal(val) : setVal(val - 1));
  //this is calling the get request for strapi
  const { data, error, loading } = FetchStrapiData(
    "http://localhost:1337/api/Products&populate=*/"
  );
  console.log(data);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const amountButton = "w-7 h-7 bg-slate-200 pointer";

  return (
    <div className="pt-[3em] flex justify-center items-center pb-[10em] gap-16">
      <img
        className="bg-cover h-[34em] w-[34em]"
        src="https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></img>

      <div className="w-[30em]">
        <div className="w-[30em]">
          <h4 className="font-bold text-5xl pb-3 ">{}</h4>
        </div>
        <p className="font-bold text-xl pb-3">{data.price}</p>
        <p className="pb-5">{data.description}</p>
        <span className="mb-2 ">Size</span>
        <div>
          <button
            onClick={handleOpen}
            className="flex border border-slate-200 h-11 w-[10em] justify-between border-md items-center p-5 mb-3"
          >
            select size <IoIosArrowDown />{" "}
          </button>
          {open ? (
            <div className="flex gap-2 absolute bg-white shadow-md w-[10em]">
              {sizes}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex pb-3 pt-2 gap-2">
          <button className={amountButton} onClick={inc}>
            +
          </button>
          <div>{val}</div>
          <button className={amountButton} onClick={dec}>
            -
          </button>
        </div>
        <div>
          <button className="border rounded-sm  border-black border-solid w-full h-11">
            add to cart
          </button>

          <button className="mt-2 rounded-sm  bg-blue-600 hover:bg-blue-500 text-white w-full h-11">
            pay with stripe
          </button>
        </div>
        <p className="text-sm italic text-slate-600 pt-2">
          For a tighter fit we advise getting the size down.
        </p>{" "}
        <p className="pt-10 pb-5 font-bold">Specifications:</p>
        <ul className="list-disc pl-5">
          <li>100% Organic open end cotton</li>
          <li>1x1 rib at neck collar</li>
          <li>Sleeve hem and bottom hem with wide double needle topstitch</li>
          <li>Set-in sleeve</li>
        </ul>
        <p className="pt-10 pb-5 font-bold">Product Care:</p>
        <ul className="list-disc pl-5">
          <li>Do not tumble dry</li>
          <li>Washing: 30° gentle</li>
          <li>Do not bleach</li>
          <li>Ironing: 110°</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
