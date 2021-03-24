import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';
const Todolist_cop = (props) => {
  return (
    <>
      <div className="lisdiv">
        <li className="liitm">
          <IconButton
            aria-label="delete"
            onClick={() => {
              props.onselect(props.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default Todolist_cop;
