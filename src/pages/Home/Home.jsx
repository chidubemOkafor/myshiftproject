import React, { useState } from "react";
import Sliders from "../../components/Sliders/Sliders";
import TypeOf from "../../components/TypeOf/TypeOf";
import MaleAndFemale from "../../components/MaleAndFemale/MaleAndFemale";
const Home = () => {
  return (
    <div>
      <Sliders />
      <TypeOf type="trending" />
      <TypeOf type="featured" />
      <MaleAndFemale />
    </div>
  );
};

export default Home;
