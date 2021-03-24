import React from "react";
import G_Header from "./G_Header";
import Pokemon from "./Pokemon";
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink exact to="/" activeClassName ="navlink"> Header </NavLink>
      <NavLink to="/pokemon/ravu/kaka"> Pikachu</NavLink>
      <NavLink exact to="/loginfrom">New Login_form</NavLink>
    </>
  );
};
export default Menu;
