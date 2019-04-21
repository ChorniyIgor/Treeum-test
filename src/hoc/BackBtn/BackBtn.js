import React from "react";
import "./BackBtn.css";
import { NavLink } from "react-router-dom";

const BackBtn = props => {
  return (
    <NavLink className="BackBtn" to={props.path}>
      Назад
    </NavLink>
  );
};
export default BackBtn;
