import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const G_note = (props) => {

  const plusthicallkre=()=>{
    props.deleitem(props.id);
  }
  return (
    <>
      <div className="note">
        <h2 className="noteofheading">{props.title}</h2>
        <p>{props.content}</p>
        <DeleteForeverIcon className="delofnode" onClick={plusthicallkre} />
      </div>
    </>
  );
};

export default G_note;
