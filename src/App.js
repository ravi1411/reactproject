import React from "react";
import "./App.css";
import "./Google_Keep.css";
import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Web_nav from "./Web_nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import "./Web_css.css";
import Web_service from "./Web_service";
import Full_note from "./Full_note";
import Web_login from "./Web_login";
import Web_contact from "./Web_contact";
import "./Sidebarcss.css";

function App() {
  const [bool, setbool] = useState(false);
  const [form, setform] = useState();

  const history = useHistory();

  const fun_define = (form) => {
    setbool(true);
    setform(form);

    alert(`Welome Mr. ${form.user}`);
    history.push("/");
  };

  const getdetail = () => {
    setbool(false);
  };

  return (
    <div>
      {bool === false ? (
        <Web_login form_submit={fun_define} />
      ) : (
        <div>
          <Web_nav for={form} passdetail={getdetail} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Web_service} />
            <Route exact path="/note" component={Full_note} />
            <Route exact path="/contact" component={Web_contact} />
          </Switch>
          {/* <Route exact path="/login" component={Web_login} /> */}
          {/* <Route exact path="/" component={() => <G_Header name="" />} />
        <Route exact path="/pokemon/:savan/:plaza" component={Pokemon} />
        <Route exact path="/loginfrom" component={Login_form} /> */}
        </div>
      )}

      {/* <Menu />
      <G_Header />
      <G_createnote passnote={addnote} />

      {additem.map((val, index) => {
        return (
          <G_note
            className="noteofmainpage"
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        );
      })} */}
    </div>
  );
}

export default App;
