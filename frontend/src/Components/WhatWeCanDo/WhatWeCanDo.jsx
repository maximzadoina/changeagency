import React from "react";
import { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./WhatWeCanDo.scss";

export class WhatWeCanDo extends Component {
  render() {
    return (
      <div id="wecando" className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <span>
              <i id="wedo" className="whatWeCanDoArrow icono-arrow1-right"></i>
            </span>
            <div className="font1 whatWeCanDotxt1">What we can do.</div>

            <div className="font2 whatWeCanDotxt2">
              There is nothing we can’t do.
              <br className="hideBr" /> At least that’s what our mothers tell
              us. :)
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <ScrollAnimation delay={125} animateOnce={true} animateIn="flipInX">
              <div className="brandingTxt">Branding</div>
              <div className="brandingList">
                -Research<br/>
                -Brand strategy<br/>
                -Naming<br/>
                -Visual identity<br/>
                -Taglines/Messaging<br/>
                -Style guidelines
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <ScrollAnimation delay={125} animateOnce={true} animateIn="flipInX">
              
            </ScrollAnimation>
          </div>
          <div className="col-10 col-sm-10 col-md-3 col-lg-3 col-xl-3 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <ScrollAnimation delay={125} animateOnce={true} animateIn="flipInX">
              
            </ScrollAnimation>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <div className="alignButton">
              <button
                data-toggle="modal"
                data-target="#modalContactForm"
                className="txtBlueCol btn-getInTouch"
              >
                <strong>GET IN TOUCH</strong>
                <span className="slideInArrowWeDo">
                  <i className="icono-arrow1-left "></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WhatWeCanDo;
