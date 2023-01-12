import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
const Product = () => {
  const [selected, setSelected] = useState(null);
  const { id } = useParams();
  const { data, loading, error } = FetchStrapiData(
    "http://localhost:1337/api/Products&populate=*/" + id,
    "15262b76e81005a153caa1620e297eb64dd64895e23d6119c58b84dbde32ba484c4ca700db33caa90724c4e98041bb7d09a088f3f2d06aa711b1767876ef8429bcaaa6d2006cfc4e7d3efef631055699e138c7d5db74f8a50df1bcf47d69ef9b4fe4ef28e511ebcc43501ce1c95c08573a6ef0b30da34b643af07ff38de43b63"
  );
  console.log(data);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className=" pt-[10em] flex justify-center pb-[10em] gap-16">
      <div className="bg-black h-[34em] w-[34em]"></div>
      <div>
        <div className="w-[30em]">
          <h4 className="font-bold text-5xl pb-3 ">{data.data.name}</h4>
        </div>
        <p className="font-bold text-xl pb-3">{data.price}</p>
        <p className="pb-5">{data.description}</p>
        <div className="flex-row">
          <p className="mb-2">Size</p>
          <div className="flex">
            <div className="relative inline-block text-left pb-5">
              <div>
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center w-[15em] h-11 rounded-sm border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() =>
                      setSelected(selected === null ? sizes[0] : null)
                    }
                  >
                    {selected || "Select a size"}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              {selected && (
                <div className="origin-top-left absolute left-0 mt-2 -ml-1 w-56 rounded-md shadow-lg">
                  <div className="rounded-md bg-white shadow-xs">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {sizes.map((size) => (
                        <a
                          key={size}
                          href="#"
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                          onClick={() => setSelected(size)}
                        >
                          {size}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="border rounded-sm  border-black border-solid w-[30em] h-11">
            add to cart
          </button>
        </div>
        <button className="mt-2 rounded-sm  bg-blue-600 hover:bg-blue-500 text-white w-[30em] h-11">
          pay with stripe
        </button>
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
