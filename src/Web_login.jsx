import React, { useState } from "react";
import "./Form_css.css";

const Web_login = (props) => {
  const [form, setform] = useState({
    user: "",
    pass: "",
    email: "",
    con: "",
  });

  const inputevent = (event) => {
    const { name, value } = event.target;

    setform((preval) => {
      return { ...preval, [name]: value };
    });
  };

  const login_submit = (e) => {
    props.form_submit(form);
    e.preventDefault();
  };

  return (
    <div>
      <div className="container-fluid  ">
        <div className="row ">
          <div className="col-10">
            <div className="maindivofloginform">
              <div className="box1">
                <form onSubmit={login_submit}>
                  <h1 className="upar_nu_login">
                    <span
                      className="spanoflogin"
                      className="fa fa-user-circle"
                      aria-hidden="true"
                    ></span>
                    Login
                  </h1>
                  <hr className="hrline" />
                  <table className="table">
                    <tr>
                      <td className="text">
                        <b>Username</b>
                      </td>
                      <td className="enter">
                        <input
                          name="user"
                          value={form.user}
                          required
                          type="text"
                          className="input"
                          placeholder=" Name"
                          onChange={inputevent}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="text">
                        <b>Password</b>
                      </td>
                      <td className="enter">
                        <input
                          name="pass"
                          value={form.pass}
                          onChange={inputevent}
                          required
                          type="Password"
                          className="input"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="text">
                        <b>Email</b>
                      </td>
                      <td className="enter">
                        <input
                          name="email"
                          value={form.email}
                          onChange={inputevent}
                          required
                          type="email"
                          className="input"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="text">
                        <b>Contact</b>
                      </td>
                      <td className="enter">
                        <input
                          name="con"
                          value={form.con}
                          onChange={inputevent}
                          className="input"
                          pattern="[0-9]{10}"
                          type="number"
                        />
                      </td>
                    </tr>
                  </table>
                  <table className="tableofsubmit">
                    <tr>
                      <td>
                        <input
                          required
                          type="submit"
                          value="Login"
                          className="input-btn"
                        />
                      </td>
                      <td className="tdofreset">
                        <input
                          type="reset"
                          value="Clear"
                          className="input-btn "
                        />
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web_login;
