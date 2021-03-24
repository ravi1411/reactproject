import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Web_nav = (props) => {
  const [form, setform] = useState(props.for);
  const [name, setname] = useState(form.user);

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setform((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const changeDone =()=>{
    setname(form.user);
  }

  console.log(form);

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <span
            className="navbar-brand"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {name}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
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
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
                onClick={changeDone}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web_nav;
