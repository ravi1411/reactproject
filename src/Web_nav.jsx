import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MailSharpIcon from "@material-ui/icons/MailSharp";

const Web_nav = (props) => {
  const [form, setform] = useState(props.for);
  const [name, setname] = useState(form.user);

  const [sider, setsider] = useState(false);

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setform((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const ChangeDone = () => {
    setname(form.user);
  };

  const showsider = () => setsider(!sider);

  const fun_logout = () => {
    props.passdetail();
  };

  return (
    <div>
      <div className="navbar">
        <div className="menu-bars">
          <MenuOpenIcon className=" appleicon" onClick={showsider} />
          <span
            className="name_in_webnav"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {name}
          </span>
        </div>
        <div className="div_of_logout">
          <h4
            className="logo_of_logout "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal_logout"
          >
            <i class="fa fa-sign-out icon_of_logout" aria-hidden="true"></i>
            {` `} Logout
          </h4>
        </div>
      </div>

      {/* --------------- Logout modal----------------- */}
      <div
        class="modal fade"
        id="exampleModal_logout"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Logout
              </h5>
            </div>
            <div class="modal-body">Are you sure want to logout ?</div>

            <div class="modal-footer">
              <button
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
                onClick={fun_logout}
              >
                Yes
              </button>

              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-secondary"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- Logout modal over----------------- */}

      <nav className={sider ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showsider}>
          <li
            className="topbar_of_slider"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span>
              <AccountCircleIcon className="topbaruser" />
            </span>
            {form.email}
          </li>

          {/* <li className="navbar-toggle ">
            <div className="menu-bars">
              <span className="apple_ixon_span">
                <AppleIcon className="appleicon" onClick={showsider} />
              </span>
            </div>
          </li> */}

          <li className="nav-text Home_nav ">
            <NavLink to="/" exact>
              <HomeIcon className="icon5" />
              Home
            </NavLink>
          </li>
          <li className="nav-text" onClick={showsider}>
            <NavLink to="/about" exact>
              <InfoIcon className="icon5" />
              About
            </NavLink>
          </li>
          <li className="nav-text" onClick={showsider}>
            <NavLink to="/service" exact>
              <i class="fa fa-bookmark  icon5" aria-hidden="true"></i> Service
            </NavLink>
          </li>
          <li className="nav-text" onClick={showsider}>
            <NavLink to="/note" exact>
              <i class="fa fa-sticky-note icon5" aria-hidden="true"></i>Note
            </NavLink>
          </li>
          <li className="nav-text" onClick={showsider}>
            <NavLink to="/contact" exact className="sidebaer_a_link">
              <MailSharpIcon className="icon5" />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* sidenavbar  end */}
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Profile
              </h5>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={InputEvent}
                  name="user"
                  defaultValue={form.user}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={InputEvent}
                  name="pass"
                  defaultValue={form.pass}
                  id="exampleFormControlInput1"
                  placeholder="enter new password"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  onChange={InputEvent}
                  name="email"
                  defaultValue={form.email}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={InputEvent}
                  name="con"
                  defaultValue={form.con}
                  id="exampleFormControlInput1"
                  placeholder="mobile no."
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={ChangeDone}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* comment */}
        {/* <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <span
            className="navbar-brand"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <AppleIcon className="icon" />
            {name}
          </span>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="activelink"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activelink"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activelink"
                  className="nav-link"
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activelink"
                  className="nav-link"
                  to="/note"
                >
                  Note
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activelink"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
        {/* sidenavbar start */}
      </div>
    </div>
  );
};

export default Web_nav;
