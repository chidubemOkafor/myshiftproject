import React from "react";

const Products = () => {
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
        <div className="pr-[7.5em]">200 products</div>
      </div>
      <div>why is this not working</div>
    </div>
  );
};

export default Products;
