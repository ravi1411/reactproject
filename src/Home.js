import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  const images =
    "https://freellustrustrations.s3.us-east-2.amazonaws.com/free-images/thumbimg_86663328042thumbejpg.jpg";
  return (
    <>
      <Common
        name="grow your Business With"
        span="Ravi Technical"
        btnname="Get started"
        visit="/about"
        imgsrc={images}
      />
    </>
  );
};

export default Home;
