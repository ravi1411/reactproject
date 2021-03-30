import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const G_note = (props) => {

  const plusthicallkre=()=>{
    props.deleitem(props.id);
  }
  return (
    <>
      <div className="note">
        <h4 className="noteofheading">{props.title}</h4>
        <p className="noteofmsg">{props.content}</p>
        <div className="combine_of_icon_btn">
        <button className="btn_of_del" onClick={plusthicallkre}>
          <DeleteForeverIcon className="delofnode" />
        </button>
        </div>
      </div>
    </>
  );
};

export default G_note;
