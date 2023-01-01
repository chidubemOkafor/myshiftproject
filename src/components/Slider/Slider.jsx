import React from "react";
import { Link } from "react-router-dom";
// import {
//   BsFillArrowLeftSquareFill,
//   BsFillArrowRightSquareFill,
//   BsFillPauseBtnFill,
// } from "react-icons/bs";
// import { useState } from "react";

const Slider = () => {
  // const images = [
  //   "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
  //   "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&w=400",
  // ];

  // const [currentImage, setCurrentImage] = useState(images[0]);

  // const nextImage = () => {
  //   const currentIndex = images.indexOf(currentImage);
  //   const nextIndex = (currentIndex + 1) % images.length;
  //   setCurrentImage(images[nextIndex]);
  // };

  // const prevImage = () => {
  //   const currentIndex = images.indexOf(currentImage);
  //   const nextIndex = (currentIndex - 1) * images.length;
  //   setCurrentImage(images[nextIndex]);
  // };

  return (
    <div className="bg-white bg-center h-screen w-screen] flex justify-center items-center">
      <Link to={"./Products/:id"}>
        <button className="h-14 mx-auto bg-black text-white w-32 hover:bg-white hover:text-black">
          Shop Now
        </button>
      </Link>
    </div>
  );
};
export default Slider;
