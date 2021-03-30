import React, { useState } from "react";
import Web_Temprature from "./Web_Temprature";
import Web_unplach from "./Web_unplach";

const Web_service = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row ">
          <div className="col-10 pt-5 ">
            <div className="row ">
              <div className="col-sm-12 col-lg-5 mx-auto">
                <Web_unplach />
              </div>
              <div className="col-sm-12 col-lg-4 mx-auto">
                <Web_Temprature />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web_service;
