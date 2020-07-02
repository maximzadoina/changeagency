import React from "react";
import { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Mantra.scss";

export class Mantra extends Component {
  render() {
    return (
      <div id="bgcMantra"  className="container-fluid">
        <div className="row">
          <div  className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <img
              className="mantraimg full zoom"
              src='https://cdn.statically.io/gh/maximzadoina/change/4d7ea5d1/src/Res/Img/mantra.png'
              alt="img not found"
            />
            <ScrollAnimation delay={200}  animateOnce={true} animateIn="slideInLeft">
              <div className="mantraArrowDiv">
                <span>
                  <i className="mantraArrow icono-arrow1-left"></i>
                </span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animateOnce={true} animateIn="slideInLeft">
              <div className="mantratxt font1">Mantra.</div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animateOnce={true} animateIn="slideInLeft">
              <div className="mantratxt2 font2">What we believe.</div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row">
          <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <ScrollAnimation delay={200} animateOnce={true} animateIn="fadeIn">
              <div className="authorMantra font4">Winston Churchill</div>
              <div className="mantratxt3 font5">
                To improve is to <span className='changeColorMantra'>change</span>,
                <br />to be perfect is to change often.
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 offset-1 offset-sm-1 offset-md-0 offset-lg-0 offset-xl-0">
            <ScrollAnimation delay={200} animateOnce={true} animateIn="fadeIn">
              <div id="alignMantratxt4">
              <div className="font3 mantratxt4">
                We are witnesses of unprecedented abundance of choice and
                innovation. <br />
                <br />
                Customer expectations are always one step ahead of the brands.
                <br />
                <br />
                It takes bold moves and and continuous change to leap ahead of
                customers and competitors. That's why we're here!
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
export default Mantra;
