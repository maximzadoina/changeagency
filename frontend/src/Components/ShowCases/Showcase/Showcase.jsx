import React from "react";
import "./Showcase.scss";

export default (props) => (
  <div className="showcaseBox">
  <div className="row no-gutters">
      <img className="showcaseImg" src={props.imgLink} alt="img not found"></img>
    </div>
        <div className="projectTitle font5">
          {props.title}
        </div>
    <div className="font7 serviceType">
      {props.serviceType}
    </div>
    <div className="viewCase font7">View Case Study</div>
    </div>
);
