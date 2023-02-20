import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(7);
  const [height, setHeight] = useState(7);

  const moverSize = (s) => {
    setWidth(width + s);
    setHeight(height + s);
  };
  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),

      5000
    );

    return () => {};
    resetTimeout();
  }, [index]);

  return (
    <div>
      <div
        className="w-full h-[30em] bg-cover transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${imgs[index].images})`,
          brightness: 90,
        }}
      >
        <div className="w-full justify-center flex ">
          <div className="">
            <p className="mt-[3em] text-white font-bold text-4xl">we are</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-white font-bold text-9xl translate-x-6 transition-all duration-500 ease-in-out">
            {imgs[index].text.toUpperCase()}
          </p>
        </div>

        <div className="flex justify-center">
          <button className=" mt-3 mb-3 text-white font-bold h-11 hover:translate-x-6 hover:transition-all duration-500 ease-in-out">
            Shift Up Now!
          </button>
        </div>

        <div className="justify-center h-6 flex absolute inset-x-0 mt-[5em] mb-5">
          <button
            className="bg-black pl-1 text-white opacity-75 rounded-full w-6 mr-2 "
            onClick={prev}
          >
            <AiOutlineLeft />
          </button>
          <div className=" items-center flex">
            {imgs.map((imgs, i) => (
              <button
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                }}
                onClick={() => {
                  setIndex(i);
                }}
                key={imgs.length}
                className="rounded-full mx-2 bg-white w-2 h-2 hover:w-4 hover:h-4 hover:transition-all hover:duration-300 hover:ease-in-out"
              ></button>
            ))}
          </div>
          <button
            className="bg-black opacity-75 text-white pl-1 rounded-full w-6 ml-2"
            onClick={next}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};
const Sliders = () => {
  return (
    <div>
      <Slideshow
        imgs={[
          {
            images:
              "https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "shift",
          },
          {
            images:
              "https://images.pexels.com/photos/9976280/pexels-photo-9976280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "affordable",
          },
          {
            images:
              "https://images.pexels.com/photos/315934/pexels-photo-315934.jpeg",
            text: "speed",
          },
          {
            images:
              "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Comfort",
          },

          {
            images:
              "https://images.pexels.com/photos/776113/pexels-photo-776113.jpeg",
            text: "culture",
          },
        ]}
      />
    </div>
  );
};
export default Sliders;
