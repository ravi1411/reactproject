import React from "react";
import MyCard from "./Newcard";
import MyCard1 from "./Newcard1";
import Array_new_cad from "./Array_new_cad";

function ncard(val) {
  return (
    <MyCard
      imgsrc={val.imgsrc}
      count={val.count}
      study={val.study}
      link={val.link}
    />
  );
}

function Help_mapFun() {
  return (
    <>
      <div className="mainclass">
          {Array_new_cad.map(ncard)}
      </div>

      {/* with the arro finction         */}

      <div className="mainclass">
        {Array_new_cad.map((val) => {
          return (
            <MyCard
            key={val.id}
              imgsrc={val.imgsrc}
              count={val.count}
              study={val.study}
              link={val.link}
            />
          );
        })}
      </div>

      <div className="mainclass">
        <MyCard1
          imgsrc="https://images.unsplash.com/photo-1615318963732-b09f11522e97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1MzcyMTk5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
          count="Italy1"
          study="study abrod1"
          link="https://en.wikipedia.org/wiki/Italy"
        />
        <MyCard1
          imgsrc="https://images.unsplash.com/photo-1614523508953-54eb4f3a9836?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1MzczNDMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
          count="inadia1"
          study="ashadeep vidhyalay1"
          link="http://ashadeep.co.in:8084/School5/Default.aspx"
        />
        <MyCard1
          imgsrc="https://images.unsplash.com/photo-1613880885387-38970fa88d95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1MzczNjQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
          count="Usa1"
          study="Cyber security1"
          link="https://www.apple.com/in/"
        />
      </div>
    </>
  );
}

export default Help_mapFun;
