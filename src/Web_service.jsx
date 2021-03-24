import React, { useState } from "react";
import Web_Temprature from "./Web_Temprature";
import Web_unplach from "./Web_unplach";

const Web_service = () => {
  
  return (
    <>
      <div className="service_div">
        <div className="web_unplach">
          <Web_unplach />
        </div>

        <div className="web_temprature">
          <Web_Temprature />
        </div>
      </div>
    </>
  );
};

export default Web_service;
