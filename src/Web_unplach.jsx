import React, { useState } from "react";

const Web_unplach = () => {
  const [img, setimg] = useState();

  const inputevent = (event) => {
    const img = event.target.value;
    console.log(img);
    setimg(img);
  };

  const imglink = `https://source.unsplash.com/400x300/?${img}`;

  return (
    <div>
      <div className="main_div_search container">
        <div className="innerdiv">
          <div className="search_bar">
            <input
              className="search_inp"
              type="Search"
              placeholder="Search anything"
              value={img}
              onChange={inputevent}
            />
          </div>
          <div className="unplach_img_div">
            <img className="unplach_img" src={imglink} alt={imglink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web_unplach;
