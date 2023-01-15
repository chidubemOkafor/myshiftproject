import React from "react";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TfiArrowRight, TfiArrowLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Card = ({ data, error, loading }) => {
  const style1 = "flex justify-center pt-8 pb-8";
  if (loading)
    return (
      <p className={style1}>
        {" "}
        <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin" />
      </p>
    );
  if (error) return <div className={style1}>error</div>;

  const image = "http://localhost:1337";

  return (
    // <div>
    //   {data.data.map((product) => (
    //     <div key={product.id} slug={product.attributes.slug}>
    //       <Link to={`./Product/${product.id}`}>
    //         <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //           <img
    //             className="w-full"
    //             src={image + product.attributes.image.data[0].attributes.url}
    //             alt="Product Image"
    //           />
    //           <div className="px-6 py-4">
    //             <div className="font-bold text-xl mb-2">
    //               {product.attributes.name}
    //             </div>
    //             <p className="text-gray-700 text-base">
    //               {product.attributes.description}
    //             </p>
    //           </div>
    //           <div className="px-6 py-4 flex justify-between items-center">
    //             <span className="text-gray-700 font-bold">
    //               {product.attributes.price}
    //             </span>
    //             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //               Add to Cart
    //             </button>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    <div>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-5 gap-y-[1.9em] gap-x-[1.9em] mt-[3em] mb-[3em] md:grid-cols-4 sm:grid-cols-3 w-[68em]">
          {data.data?.map((item) => (
            <div key={item.id} slug={item.attributes.slug}>
              <Link to={`/Product/${item.id}`}>
                <div className="">
                  <div className="w-[12em] h-[12em]">
                    <img
                      src={image + item.attributes.image.data[0].attributes.url}
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-[10em] font-bold text-xl">
                    {item.attributes.name}
                  </div>
                  <p className="font-bold">${item.attributes.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-11">
        <button className="border border-black w-[4em] h-[3em] flex justify-center pt-2">
          <TfiArrowLeft className="h-[2em] w-[2em]" />
        </button>
        <div className="my-auto mx-10">
          <p>Page 1 of 4</p>
        </div>
        <button className="border border-black w-[4em] h-[3em] flex justify-center pt-2">
          <TfiArrowRight className="h-[2em] w-[2em]" />
        </button>
      </div>
    </div>
  );
};

export default Card;
