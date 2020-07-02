import React from "react";
import "./Hamburger.scss";
import { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "",
  isTop:'' };
  }

  componentDidMount(){
    window.addEventListener('scroll',e=>this.handleNavigation(e))
  }

  unCheck() {
    let ref = "ref_1";
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  handleNavigation = (e) => {
    const window = e.currentTarget;
    if(window.scrollY>10){
    if (this.prev > window.scrollY) {
        this.setState({
          isTop:''
        })
    } else if (this.prev < window.scrollY) {
        this.setState({
          isTop:'hideTopMenuBar'
        })
    }
  }
    this.prev = window.scrollY;
};

  render() {
    return (
      <div className={`${this.props.bgColor} ${this.state.isTop} topMenuBar`}>
        <div className="menu-wrap mt-4 mr-5 mb-5 ">
          <input type="checkbox" className="toggler" ref={"ref_1"} />
          <div className="hamburger">
            <div></div>
          </div>
          <a href="#Home">
                <img
                  className="logo slide-in-left"
                  src="https://cdn.statically.io/gh/maximzadoina/change/ca1a5fe1/src/Res/Img/Logo.svg"
                  alt="img not found"
                /></a>
          <div className="menu">
            <div>
              <div>
                <ul className="topMenBar">
                  <li className="slide-in-right-1">
                    <NavLink
                      onClick={() => this.unCheck()}
                      smooth
                      to="#NotAboutUs"
                      activeClassName="selected"
                    >
                      Not about us
                    </NavLink>
                  </li>

                  <li className="slide-in-right-2">
                    <NavLink
                      onClick={() => this.unCheck()}
                      smooth
                      to="#mantra"
                      activeClassName="selected"
                    >
                      Our mantra
                    </NavLink>
                  </li>
                  <li className="slide-in-right-3">
                    <NavLink
                      onClick={() => this.unCheck()}
                      smooth
                      to="#wecando"
                      activeClassName="selected"
                    >
                      Our services
                    </NavLink>
                  </li>
                  <li className="slide-in-right-4">
                    <NavLink
                      onClick={() => this.unCheck()}
                      smooth
                      to="#showcases"
                      activeClassName="selected"
                    >
                      Showcases
                    </NavLink>
                  </li>

                  <li className="slide-in-right-5">
                    <NavLink
                      onClick={() => this.unCheck()}
                      smooth
                      to="#theblog"
                      activeClassName="selected"
                    >
                      The Blog
                    </NavLink>
                  </li>

                  <li className="slide-in-right-6">
                    <NavLink
                      data-toggle="modal"
                      data-target="#modalContactForm"
                      onClick={() => this.unCheck()}
                      smooth
                      to="#"
                      activeClassName="selected"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="desktopMenu">
        <a href="#Home">
                <img
                  className="logoRow logo slide-in-left"
                  src="https://cdn.statically.io/gh/maximzadoina/change/ca1a5fe1/src/Res/Img/Logo.svg"
                  alt="img not found"
                /></a>
          <li className="slide-in-right-desktop-1 desktopMenu">
            <NavLink
              className="font2 navLinkDesktop"
              smooth
              to="#NotAboutUs"
              activeClassName="selected"
            >
             Not about us
            </NavLink>
          </li>
          <li className="slide-in-right-desktop-2 desktopMenu">
            <NavLink
              className="font2 navLinkDesktop"
              smooth
              to="#mantra"
              activeClassName="selected"
            >
              Our mantra
            </NavLink>
          </li>
          <li className="slide-in-right-desktop-3 desktopMenu">
            <NavLink
              className="font2 navLinkDesktop"
              smooth
              to="#wecando"
              activeClassName="selected"
            >
              Our services
            </NavLink>
          </li>
          <li className="slide-in-right-desktop-4 desktopMenu">
          <NavLink
              className="font2 navLinkDesktop"
              smooth
              to="#showcases"
              activeClassName="selected"
            >
              Showcases
            </NavLink>
          </li>

          <li className="slide-in-right-desktop-5 desktopMenu">
          <NavLink
              className="font2 navLinkDesktop"
              smooth
              to="#theblog"
              activeClassName="selected"
            >
              The Blog
            </NavLink>
          </li>

          <li className="slide-in-right-desktop-6 desktopMenu">
            <button
              data-toggle="modal"
              data-target="#modalContactForm"
              className="menuContact font3"
            >
              <strong>Contact</strong>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Hamburger;
