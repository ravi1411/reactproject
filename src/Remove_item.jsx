import React, { useState } from "react";
import Todolist_cop from "./Todolist_cop";
import "./Remove_item.css";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { colors } from "@material-ui/core";
import { Usestate } from "./Count_Usestate_hook";
const Remove_item = () => {
  const [itm, setitm] = useState();

  const [itm1, setitm1] = useState([]);
  const [line,setline] = useState(false);
  const inpivt = (event) => {
    setitm(event.target.value);
  };

  const sub = () => {
    setitm1((olditm) => {
      return [...olditm, itm];
    });
    setitm("");
  };

  const delitm = (id) => {
   
    setitm1((olditm) => {
      return olditm.filter((arrele, index) => {
        return index !== id;
      });
    });
  };  

  return (
    <>
      <div className="main_div">
        <div className="inner">
          <div className="consept">
            <h2 className="Heading">**Hina Backery**</h2>

            <input
              className="inpf"
              type="text"
              placeholder="Add a item:"
              onChange={inpivt}
              value={itm}
            />

            <IconButton
              variant="outlined"
              onClick={sub}
              className="btn"
            >
              <AddIcon />
            </IconButton>

            <ol>
              {itm1.map((itmval, index) => {
                return (
                  <Todolist_cop
                    text={itmval}
                    key={index}
                    id={index}
                    onselect={delitm}

                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remove_item;
