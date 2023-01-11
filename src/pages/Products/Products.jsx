import React from "react";
import Card from "../../components/Cards/Card";
import FetchStrapiData from "../../Hooks/FetchStrapiData";

const Products = () => {
  const { data, error, loading } = FetchStrapiData(
    "http://localhost:1337/api/Products?populate=*",
    "15262b76e81005a153caa1620e297eb64dd64895e23d6119c58b84dbde32ba484c4ca700db33caa90724c4e98041bb7d09a088f3f2d06aa711b1767876ef8429bcaaa6d2006cfc4e7d3efef631055699e138c7d5db74f8a50df1bcf47d69ef9b4fe4ef28e511ebcc43501ce1c95c08573a6ef0b30da34b643af07ff38de43b63"
  );
  console.log(data);
  return (
    <div className="divide-y">
      <div className="pb-[1em] flex justify-center font-bold text-4xl pt-[4em] ">
        <h4>SHOP ALL</h4>
      </div>
      <div className="flex pb-4 justify-between pt-4">
        <div className="pl-[7.5em] flex gap-6">
          <p>sort by:</p>
          <p>title</p>
        </div>
        <div className="pr-[7.5em]">{data.length} products</div>
      </div>
      <div>
        <Card data={data} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default Products;
