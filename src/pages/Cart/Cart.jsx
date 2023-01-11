import Raect from "react";

const Cart = () => {
  return (
    <div>
      <div className="font-bold text-4xl pt-[4em] flex justify-center pb-[1em]">
        <h1>Your Cart</h1>
      </div>
      <div className="flex justify-center gap-[35.9em] pb-5 ">
        <div>
          <p>PRODUCT</p>
        </div>
        <div className="flex gap-[10em]">
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
