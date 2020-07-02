import React from "react";
import { Animated } from "react-animated-css";
import { Component } from "react";
import "./HomePage.scss";
import Navb from "../Navbar/Navbar";
import ContactModal from "../ContactForm/Form";
import disableScroll from "disable-scroll";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    disableScroll.on();

    this.state = {
      isTop: "",
      loadedCSS: "showLoader",
      hideLoader: "alignLoader",
      loader: "loader",
      showLoadingLogo: "loadingLogo",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loadedCSS: null,
        hideLoader: null,
        loader: null,
        showLoadingLogo: "hideImgLoadingLogo",
      });
      disableScroll.off();
    }, 1500);
  }

  render() {
    return (
      <div id="Home">
        <div className={this.state.hideLoader}>
          <div className={this.state.loader}>
            <div className="circle">
              <div className="face"></div>
            </div>

            <div className="face">
              <div className="circle">
                <img
                  className={this.state.showLoadingLogo}
                  alt="loading logo"
                  src="https://cdn.statically.io/gh/maximzadoina/change/8d8d913c/src/Res/Img/loadingC.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.loadedCSS}>
          <div id="bgcCol" className=" container-fluid">
            <div className="row ">
              <div className="logoRow col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1"></div>
              <div className="  col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2 offset-5 offset-sm-5 offset-md-7 offset-lg-7 offset-xl-7 "></div>
            </div>
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 offset-0 offset-sm-0 offset-md-0 offset-lg-0 offset-xl-0 d-inline-flex">
                <div className="wow">
                  <div className="wowBox">Driven by Wow!</div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-10 col-lg-5 col-xl-5 offset-0 text-md-left text-lg-left text-xl-left order-2 order-sm-2 order-md-3 order-lg-1 order-xl-1">
                <div className="slide-in-left homeTxt font1 ">
                  We create brands <br className="showHideHomeTxtBr2" />{" "}
                  and&nbsp;
                  <br className="showHideHomeTxtBr" />
                  game-changing digital experiences.
                </div>
                <div className="slide-in-left homeTxt3 font3">
                  Great people make great change happen.
                </div>

                <button
                  data-toggle="modal"
                  data-target="#modalContactForm"
                  className="slide-in-left btn-toolset"
                >
                  <strong>I WANT A CHANGE</strong>
                  <div className="slideInArrow">
                    <span>
                      <i className="icono-arrow1-left "></i>
                    </span>
                  </div>
                </button>
                <ContactModal />
              </div>
              <div className="col-10 col-sm-11 col-md-10 col-lg-4 col-xl-4 offset-0 offset-sm-0 offset-md-0 offset-lg-0 offset-xl-0 text-center text-sm-center text-md-left text-lg-left text-xl-left order-1 order-sm-1 order-md-1 order-lg-2 order-xl-2">
                <img
                  className="mob"
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/mob.png"
                  alt="img not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flashblur.png"
                  className="flasBlur"
                  alt="flashblur not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flashblur.png"
                  className="flashBlur2"
                  alt="flashblur not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flashblur.png"
                  className="flashBlur3"
                  alt="flashblur not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/melody.png"
                  className="melody1"
                  alt="melody not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/melody.png"
                  className="melody2"
                  alt="melody not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/cut.png"
                  className="cut"
                  alt="cut not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/rocket.png"
                  className="rocketHome"
                  alt="rocket not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flamingo.png"
                  className="flamingoBlur"
                  alt="flamingo not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flamingo1.png"
                  className="flamingo"
                  alt="flamingo1 not found"
                ></img>
                 <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flash.png"
                  className="flashFixe"
                  alt="flash not found"
                ></img>
                 <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/sphere.png"
                  className="sphere"
                  alt="sphere not found"
                ></img>
                 <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/msg.png"
                  className="msgHome"
                  alt="msg not found"
                ></img>
                
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 offset-1 offset-sm-1 offset-md-0 offset-lg-1 offset-xl-1 d-none d-print-inline-flex d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex order-3 order-sm-3 order-md-2 order-lg-3 order-xl-3">
                <Navb />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 offset-md-7 offset-lg-7 offset-xl-7 text-sm-center text-md-center text-lg-center text-xl-center">
                <Animated animationIn="slideInLeft" isVisible={true}>
                  <div className="contactMail slide-in-left">
                    office@changecy.com
                  </div>
                </Animated>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-sm-center text-md-center text-lg-center text-xl-center">
                <Animated
                  animationIn="slideInRight"
                  animationInDelay={900}
                  isVisible={true}
                >
                  <div className="contactNumber">+40 748 681 744</div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
