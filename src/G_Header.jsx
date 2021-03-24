import React from 'react';
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { useHistory } from "react-router-dom";

 

const G_Header=(props)=>{
  const history =useHistory();

    return (
      <>
        <div>
        {/* <button onClick={history.goForward}>Go Forward</button> */}
        <h1>{props.name}</h1>
          <h1 className="Header">
            <GTranslateIcon className="iconofgoogle"/>
            Kukadiya Notes
          </h1>
        </div>
      </>
    );
}

export default G_Header;