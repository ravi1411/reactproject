import React, { useContext } from "react";

import { firstname, lastname } from "./Main_Context";

const Context2 = () => {
  const fname = useContext(firstname);
  const lname = useContext(lastname);
  return (
    <>
      <h1>
        my name is {fname} and lname is {lname}
      </h1>
    </>
  );
};
export default Context2;
