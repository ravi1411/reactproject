import React, { useState } from "react";

const Add_newitem = () => {
  const [inl, setinl] = useState();
  const [item, setitem] = useState([]);

  const itemivent = (event) => {
    setinl(event.target.value);
  };

  const listofitm = () => {
    setitem((olditm) => {

        return[...olditm,inl];
    });
    setinl("");
  };

  return (
    <>
      <div className="main">
        <div className="inner">
          <h2>**Hina Backery**</h2>

          <input
          className="inpu"
            type="text"
            placeholder="Add a item:"
            onChange={itemivent}
            value={inl}
          />

          <button className="btn" onClick={listofitm}> + </button>
        </div>

         <ol>
          {
              item.map((itmval)=>{
              return<li>{itmval}</li>;
              })
          }
        </ol>

      </div>
    </>
  );
};

export default Add_newitem;
