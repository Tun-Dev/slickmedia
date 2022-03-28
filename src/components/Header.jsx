import { BGapp } from "../assets/images";
import { MyTestApp } from "../assets/svgs";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="navcon">
        <div>
          <img src={MyTestApp} alt="" />
        </div>
      </div>
      <div className="header">
        <h1>Watch something incredible.</h1>
      </div>
    </>
  );
};

export default Header;
