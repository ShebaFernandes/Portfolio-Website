import React from "react";
import "./style.scss"; // Make sure this file exists
// import { BsInfoCircleFill } from "react-icons/bs";

const PageHeaderContent = ({ headerText, icon }) => {
  return (
    <div className="page-header-content">
      <div className="page-header-content__row">
        <h2 className="page-header-content__text">{headerText}</h2>
        <span className="page-header-content__icon">{icon}</span>
      </div>
      <div className="page-header-content__line"></div>
    </div>
  );
};

export default PageHeaderContent;
