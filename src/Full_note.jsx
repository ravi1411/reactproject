import React, { useState } from "react";
import G_Header from "./G_Header";
import G_createnote from "./G_createnote";
import G_note from "./G_note";

const Full_note = () => {
  const [additem, setadditem] = useState([]);

  const addnote = (note) => {
    setadditem((preval) => {
      return [...preval, note];
    });
  };

  const delenote = (id) => {
    setadditem((preval) =>
      preval.filter((val, index) => {
        return index != id;
      })
    );
  };

  return (
    <div>
      <G_Header />
      <G_createnote passnote={addnote} />

      {additem.map((val, index) => {
        return (
          <G_note 
          
            className="noteofmainpage"
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleitem={delenote}
          />
        );
      })}
    </div>
  );
};

export default Full_note;
