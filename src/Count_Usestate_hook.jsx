import React, { useState } from "react";

    // click counter for click press--------------------------------------------
const Usestate = () => {
  const state = useState();

  const [count, setCount1] = useState(0);

  const incfun = () => {
    setCount1(count + 1);
  };

  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incfun}>click inc</button>
    </>
  );
};

  // clock ----------------------------------------------------------------

const Time=()=>
{
  let time = new Date().toLocaleTimeString();

  const [count, setntime] = useState();

  const updatetime = () => {
    time = new Date().toLocaleTimeString();
    setntime(time);
  };

  setInterval(updatetime,1000);
    return (
      <>

        <h1>{time}</h1>
       </>
    );


};
export {Usestate ,Time }; 
