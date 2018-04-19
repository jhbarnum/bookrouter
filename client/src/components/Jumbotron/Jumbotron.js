import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ backgroundImage: "carbonf.png", height: 200, clear: "both", paddingTop: 50, textAlign: "center" }}
 
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
