import React from "react";
import "./Panel.css";

const Panel = ({ children }) => (
    <div className="panel panel-primary">
        <div className="panel-heading" style={{textAlign: "center"}}
        
        className="panel-heading"
        >

            {children}
        </div>
    </div>
);

export default Panel;