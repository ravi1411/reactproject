import React, { useState } from 'react';

const Login_form=()=>
{
    const [fullname, setname] = useState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      newfield:"",

    });

    const inputevent=(event)=>
    {
        const {value,name}=event.target;

        setname((prevalue) =>{

          // Short Method
          return{
            ...prevalue,
            [name]:value,
          }

            // // ********* */ LONG METHOD    **********
            // if (name === "fname") {
            //   return {
            //     fname: value,
            //     lname: prevalue.lname,
            //     email: prevalue.email,
            //     phone: prevalue.phone,
            //   };
            // } else if (name === "lname") {
            //   return {
            //     fname: prevalue.fname,
            //     lname: value,
            //     email: prevalue.email,
            //     phone: prevalue.phone,
            //   };
            // } else if (name === "email") {
            //   return {
            //     fname: prevalue.fname,
            //     lname: prevalue.lname,
            //     email: value,
            //     phone: prevalue.phone,
            //   };
            // } else if (name === "phone") {
            //   return {
            //     fname: prevalue.fname,
            //     lname: prevalue.lname,
            //     email: prevalue.email,
            //     phone: value,
            //   };
            // }
        });

    };

    const onSubmits=(event)=>
    {
        event.preventDefault();
        alert("form submit");

    };


    return (
      <>
        <div>
          <from onSubmit={onSubmits}>
            <h1>
              click krta ni sathe === {fullname.fname} {` `} {fullname.lname}
            </h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <p>{fullname.newfield}</p>

            <input
              type="text"
              placeholder="Enter your Fname"
              onChange={inputevent}
              name="fname"
              value={fullname.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your lname"
              onChange={inputevent}
              name="lname"
              value={fullname.lname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={inputevent}
              name="email"
              value={fullname.email}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your phone no"
              onChange={inputevent}
              name="phone"
              value={fullname.phone}
            />
            <br />

            <input
              type="text"
              placeholder="Enter your newfield"
              onChange={inputevent}
              name="newfield"
              value={fullname.newfield}
            />
            <br />
            <button type="submit">Submit 👍</button>
          </from>
        </div>
      </>
    );
};

export default Login_form;