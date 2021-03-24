import { Input } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

const G_createnote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const inputevent = (event) => {
    const { name, value } = event.target;

    setnote((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const addevent = () => {
    props.passnote(note);
    setnote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="createnote">
        <div className="box_create_note">
          <form >
            <Input
              name="title"
              value={note.title}
              onChange={inputevent}
              type="text"
              placeholder="Title"
              
              className="title_text"
            />

            <textarea
              autoComplete="off"
              name="content"
              value={note.content}
              onChange={inputevent}
              type="text"
              placeholder="Write a msg..."
              className="title_msg"
            ></textarea>
          </form>
          <Button className="plusbtn" onClick={addevent}>
            <AddCircleOutlineIcon className="iconofplus" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default G_createnote;
