import React, { useState } from "react";

const Click_afte_show = () => {
  const [name, setname] = useState();
  const [name1, setname1] = useState();

  const [toname, settoname] = useState();
  const [toname1, settoname1] = useState();

  const inputevent = (event) => {
    setname(event.target.value);
  };

  const toinputevent = (event) => {
    settoname(event.target.value);
  };

  const onSubmit1 = () => {
    setname1(name);
    settoname1(toname);
  };

  return (
    <>
      <h1>
        Click krya psi 
        
         {` `} {name1} {` `} {toname1}
      </h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={inputevent}
        value={name}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your toname"
        onChange={toinputevent}
        value={toname}
      />
      <br/>
      <button onClick={onSubmit1}>Submit</button>
    </>
  );
};

export default Click_afte_show;
