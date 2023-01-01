import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-[26em] justify-center text-white flex ">
      <div className="flex pt-14 gap-x-24">
        <div className="justify-evenly">
          <div className="mb-5">
            <p>CUSTOMER CARE</p>
          </div>
          <div className="flex gap-x-8 ">
            <button>Contact Us</button>
            <button>Shipping & Returns</button>
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <p>NEWSLETTER</p>
          </div>

          <div className="">
            <form>
              <input
                className="w-[25em] border border-white  h-11 bg-white text-white"
                type="email"
                name="email"
                placeHolder="Email address"
              />
              <button
                className=" bg-white text-black font-bold w-28 h-11 hover:text-white hover:bg-black"
                type="submit"
                value="Submit"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
