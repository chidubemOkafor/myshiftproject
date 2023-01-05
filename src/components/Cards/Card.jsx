import React from "react";
import FetchStrapiData from "../../Hooks/FetchStrapiData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = () => {
  // a61484bdd8f4da71355cc6d3f241c011b355fd5ce9f93b5664a9e03a63cabeeb409c709f292f9b189d7d8de0eac9a17745b7b9f5b3ed1a4f1ce15adf9db940f0296cee73db6ea5308c75da67713e74fa5000a14be5a09b865b5b955d0de500ed592a86c6c672d20fa555928ff4b72a97c99294ecffc59b2d04d898ef345693c5
  const { data, error, loading } = FetchStrapiData(
    "http://localhost:1337/api/Products",
    "a61484bdd8f4da71355cc6d3f241c011b355fd5ce9f93b5664a9e03a63cabeeb409c709f292f9b189d7d8de0eac9a17745b7b9f5b3ed1a4f1ce15adf9db940f0296cee73db6ea5308c75da67713e74fa5000a14be5a09b865b5b955d0de500ed592a86c6c672d20fa555928ff4b72a97c99294ecffc59b2d04d898ef345693c5"
  );
  console.log(data);

  const style1 = "flex justify-center pt-8 pb-8";
  if (loading)
    return (
      <p className={style1}>
        {" "}
        <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin" />
      </p>
    );
  if (error) return <div className={style1}>error</div>;
  return (
    <div>
      {data.map((product) => (
        <div key={product.id} slug={product.Slug}>
          <Link to={`./Product/${product.id}`}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={product.images} alt="Product Image" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{product.name}</div>
                <p class="text-gray-700 text-base">{product.discription}</p>
              </div>
              <div class="px-6 py-4 flex justify-between items-center">
                <span class="text-gray-700 font-bold">{product.price}</span>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
