import React, { useState } from "react";
import Slider from "../../components/Slider/Slider";
import TypeOf from "../../components/TypeOf/TypeOf";
import MaleAndFemale from "../../components/MaleAndFemale/MaleAndFemale";
const Home = () => {
  return (
    <div>
      <Slider />
      <TypeOf type="trending" />
      <TypeOf type="featured" />
      <MaleAndFemale />
    </div>
  );
};

export default Home;
