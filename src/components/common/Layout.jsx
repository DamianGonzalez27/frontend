import React from "react";
import Navbar from "./Navbar";
/* eslint-disable react/prop-types */

const Layout = ({ children }) => {
  return (
    <div className="row m-0">
      <div className="col-12 p-0">
        <Navbar />
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
};

export const RegisterLayout = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center position-absolute h-75 w-100">
      <div className="row w-25">
        <div className="col-12">
          <div className="container d-flex col-10 p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
