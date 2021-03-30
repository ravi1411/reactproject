import React from "react";
import emailjs from "emailjs-com";

function Web_contact() {
  const formsumbit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_sc91z3b",
        e.target,
        "user_loJvV2eUKUgsuwaurijLl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("form Submited");
    e.target.reset();
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-0  mx-auto">
            <form onSubmit={formsumbit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  required
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Phone No
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  required
                  id="exampleFormControlInput2"
                  placeholder="Mobile Nomber"
                  maxLength="10"
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  id="exampleFormControlInput3"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  required
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn-sub-of-contact">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--social--------social ni css google ni css sathe che--------> */}
      <div className="container-fluid padding mt-5" id="social">
        <div className="text-center padding">
          <div className="col-12 social  mt-2">
            <a
              href="https://www.facebook.com/ravi.kukadiya.754/"
              target="_blank"
            >
              <i
                className="fa fa-facebook  icon_3"
                style={{ color: "blue" }}
              ></i>
            </a>
            <a href="https://twitter.com/home?lang=en" target="_blank">
              <i
                className="fa fa-twitter  icon_3"
                style={{ color: "coral" }}
              ></i>
            </a>  
            <a href="https://www.instagram.com/ravi_kukadiya_/" target="_blank">
              <i
                className="fa fa-instagram  icon_3"
                style={{ color: "blueviolet" }}
              ></i>
            </a>
            <a href="" target="_blank">
              <i
                className="fa fa-google  icon_3"
                style={{ color: "cadetblue" }}
              ></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCnu6fWEw9GQ6S9frHa67OUg"
              target="_blank"
            >
              <i className="fa fa-youtube  icon_3" style={{ color: "red" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web_contact;
