import React, { createContext } from "react";
import Context1 from "./Context1";

const firstname = createContext();
const lastname = createContext();

const Main_Context = () => {
  return (
    <>
      <firstname.Provider value={"Ravi"}>
        <lastname.Provider value={"kukadiya"}>
          <Context1 />
        </lastname.Provider>
      </firstname.Provider>
    </>
  );
};

export default Main_Context;
export { firstname, lastname };
