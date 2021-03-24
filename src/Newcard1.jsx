    import React from "react";
    import "./Newcard.css";

    function MyCard1(props) {
      return (
        <>
          <div className="myclass">
            <div className="card">
              <img className="card-img" src={props.imgsrc} alt="Image" />
              <div className="card-info">
                <p className="card-title">{props.count}</p>
                <h3 className="card-name">{props.study}</h3>
                <a href={props.link}>
                  <button>Shop Now</button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }

    export default MyCard1;
