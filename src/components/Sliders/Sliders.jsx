import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

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
        className="w-full h-[30em]  bg-cover transition-all duration-500 ease-in-out"
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

        <div className="justify-center flex absolute inset-x-0  mb-5">
          <button
            className="bg-black opacity-75 rounded-full w-6 mr-2 "
            onClick={prev}
          >
            L
          </button>
          <div className=" bg-black opacity-60 items-center flex">
            {imgs.map((imgs, i) => (
              <button
                onClick={() => {
                  setIndex(i);
                }}
                key={imgs.length}
                className="rounded-full mx-2 bg-white w-2 h-2 hover:w-4 hover:h-4 hover:transition-all hover:duration-300 hover:ease-in-out"
              ></button>
            ))}
          </div>
          <button
            className="bg-black opacity-75 rounded-full w-6 ml-2"
            onClick={next}
          >
            R
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
              "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "shift",
          },
          {
            images:
              "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
