import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = ({ menuRef, handleOpen2 }) => {
  const ArrayOfCarts = [];
  const [totalPrice, setTotalPrice] = useState("0");

  return (
    <>
      <div
        ref={menuRef}
        className="fixed mt-[5.2em] mr-5 bg-white shadow-md w-[25em] border absolute top-0 right-0"
      >
        <div className="w-[23em] m-auto h-auto">
          <div className="flex justify-between">
            <h1 className="text-slate-500 pt-3 ">Products in your Cart</h1>{" "}
            <div className="gap-8">
              <h1 className="text-3xl font-bold absolute">SHIFT</h1>{" "}
              <h4 className="text-yellow-300 text-4xl font-bold italics ">
                SHIFT
              </h4>
            </div>
          </div>

          {ArrayOfCarts.length == 0 ? (
            <div className=" flex justify-center items-center my-16 italics text-slate-400 ">
              <h1>cart is empty</h1>
            </div>
          ) : (
            <></>
          )}
          <div className="flex justify-between">
            <span className="font-bold">SUBTOTAL</span>
            <p>${totalPrice}</p>
          </div>
          <div className="">
            <button className="bg-blue-600 mt-2 mb-2 rounded-sm hover:bg-blue-500 w-full h-8 text-white">
              Checkout
            </button>
            <button
              onClick={handleOpen2}
              className="bg-white mt-2 mb-2 border-black border-solid border rounded-sm  w-full h-8 "
            >
              Return
            </button>
            <button className="text-red-500 hover:text-red-400 mb-5 font-bold flex justify-between">
              <AiOutlineDelete className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
