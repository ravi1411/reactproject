import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid pt-5 nav-bg">
          <div className="row ">
            <div className="col-10 mx-auto pt-5 ">
              <div className="row ">
                <div className=" col-md-6  lefthome d-flex justify-content-center flex-column">
                  <div className="p-5">
                    <h1 className="grow p-3">
                      {props.name} <strong>{props.span}</strong>
                    </h1>

                    <h4 className="wehave  p-3">
                      We Have a Good And Best Business Man Team
                    </h4>

                    <div className="getsdiv pt- ">
                      <NavLink className="gets  p-1 ml-3" to={props.visit}>
                        {props.btnname}
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className=" col-md-6 righthome">
                  <img
                    className="img-fluid p-3 homeimg"
                    src={props.imgsrc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
