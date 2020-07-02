import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./NotAboutUs.scss";
import { Component } from "react";
import $ from "jquery";

export class NotAboutUs extends Component {
  componentDidMount() {
    var card = $(".cardHover");
    var glasses = $(".glasses");

    $(document).on("mousemove", function (e) {
      var ax = -($(window).innerWidth() / 2 - e.pageX) / 80;
      var ay = -($(window).innerHeight() / 2 - e.pageY) / 85;
      if(e.pageY>2000)
      ay=0;
      card.attr(
        "style",
        "transform: rotateY(" +
          ax +
          "deg) rotateX(" +
          ay +
          "deg);-webkit-transform: rotateY(" +
          ax +
          "deg) rotateX(" +
          ay +
          "deg);-moz-transform: rotateY(" +
          ax +
          "deg) rotateX(" +
          ay +
          "deg)"
      );
      glasses.attr("style", "transform:translateY(" + ay + "px)	");
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-10 offset-1 offset-sm-1 col-md-5 col-lg-5 col-xl-5 offset-xl-1 offset-lg-1  offset-md-1 d-md-inline-block d-lg-inline-block d-xl-inline-block align-self-center align-self-sm-center align-self-md-center align-self-lg-center align-self-xl-center">
            <div className="cardHover">
              <div className="cardHover-content">
                <img
                  className="glasses"
                  src="https://cdn.statically.io/gh/maximzadoina/change/5dfdc0ae/change/src/Res/Img/glasses.png"
                  alt="img not found"
                />

                <img
                  className="bust"
                  src="https://cdn.statically.io/gh/maximzadoina/change/72e419d3/change/src/Res/Img/bust.png"
                  alt="img not found"
                />
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flash.png"
                  className="flashAboutUs1"
                  alt="flash not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flash.png"
                  className="flashAboutUs2"
                  alt="flash not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/bcc69716/change/src/Res/Img/flash.png"
                  className="flashAboutUs3"
                  alt="flash not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/72e419d3/change/src/Res/Img/blurPoint.png"
                  className="blurPoint1"
                  alt="point not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/72e419d3/change/src/Res/Img/blurPoint.png"
                  className="blurPoint2"
                  alt="point not found"
                ></img>
                <img
                  src="https://cdn.statically.io/gh/maximzadoina/change/72e419d3/change/src/Res/Img/blurPoint.png"
                  className="blurPoint3"
                  alt="point not found"
                ></img>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-10 offset-1 offset-sm-1 offset-md-0 offset-lg-0 offset-xl-0 col-md-5 col-lg-5 col-xl-5">
            <div className="font1 notAboutUs">
              <span className="txtBlueCol">Not </span>about us.
            </div>
            <span className="font2 notAboutUs2">Totally not about us.</span>

            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeInRight"
              delay={150}
            >
              <div className="notAboutUs3 font3">
              <span role='img' aria-label='notAboutUs'>👋🏼</span>Heey! We are branding & experience design agency that builds
                <strong> mediocre digital</strong> products that do not stand
                out. We appreciate the comfort zone and are not ambitious at
                all. <br />
                <br />
                If something bothers us, ohh, nothing bothers us. We
                <strong> don`t</strong> want to <strong>change anything</strong>
                . Everything is good and beautiful. That's not how we are!
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default NotAboutUs;
