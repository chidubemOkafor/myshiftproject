import React from "react";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
import { Link } from "react-router-dom";

const TypeOf = (props) => {
  const { data, error, loading } = FetchStrapiData(
    `http://localhost:1337/api/Products?populate=*&[filters][type][$eq]=${props.type}`,
    "15262b76e81005a153caa1620e297eb64dd64895e23d6119c58b84dbde32ba484c4ca700db33caa90724c4e98041bb7d09a088f3f2d06aa711b1767876ef8429bcaaa6d2006cfc4e7d3efef631055699e138c7d5db74f8a50df1bcf47d69ef9b4fe4ef28e511ebcc43501ce1c95c08573a6ef0b30da34b643af07ff38de43b63"
  );
  const image = "http://localhost:1337";
  console.log(data);
  return (
    <div>
      <div className="pb-[1em] flex justify-center font-bold text-4xl pt-[1em]">
        <h4>{props.type} products </h4>
      </div>
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
    </div>
  );
};

export default TypeOf;
