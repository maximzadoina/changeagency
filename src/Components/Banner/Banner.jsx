import React from "react";
import "./Banner.scss";
import { Component } from "react";

export class Banner extends Component {
  constructor() {
    super();
    this.state = {
      showEmailInput: "",
      showOK: "",
      email: "",
      activeSubscribe: true,
    };
  }

  subscribe = (event) => {
    event.preventDefault();

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      this.setState({
        showOK: "success-checkmark",
        showEmailInput: "hideEmail",
        activeSubscribe: false,
      });
    }
  };

  updateEmail = ({ target }) => {
    let data = "";
    data = target.value;

    this.setState({
      email: data,
    });
  };
  render() {
    return (
      <div className="bgcColor container-fluid">
        <div className="row">
          <div className="alignTxt1 font5 noPadding col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            Ready to make change happen?
          </div>
        </div>
        <div className="row">
          <div className=" noPadding col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button
              data-toggle="modal"
              data-target="#modalContactForm"
              className="btnBanner btn-toolset ntn"
            >
              <strong>GET IN TOUCH</strong>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="noPadding col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 order-2 order-sm-2 order-md-2 order-lg-1 order-xl-1">
            <div className="font7 bannerTxt1">We are based in</div>
            <div className="font5 bannerTxt2">Cluj-Napoca, Romania</div>
            <div className="font6 bannerTxt3">+40 748 681 744</div>
            <div className="font6 bannerTxt4">office@changecy.com</div>
          </div>
          <div className="noPadding col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 order-1 order-sm-1 order-md-1 order-lg-2 order-xl-2">
            <div className="fbBox">
              <a
                className="nav-link mr-5 "
                href="https://www.facebook.com/changecy/"
              >
                <img
                  className="fbLogo"
                  src="https://cdn.statically.io/gh/maximzadoina/change/2705fa3c/src/Res/Img/fb.png"
                  alt="img load error FB"
                ></img>
              </a>
            </div>

            <div className="beBox">
              <a
                className="nav-link mr-5 "
                href="https://www.behance.net/changeagency/"
              >
                <img
                  className="beImg"
                  src="https://cdn.statically.io/gh/maximzadoina/change/2705fa3c/src/Res/Img/be.png"
                  alt="img load error behance"
                ></img>
              </a>
            </div>

            <div className="instaBox">
              <a href="https://www.instagram.com/changeagencyofficial/">
                <img
                  className="instaImg"
                  src="https://cdn.statically.io/gh/maximzadoina/change/2705fa3c/src/Res/Img/insta.png"
                  alt="img load error insta"
                ></img>
              </a>
            </div>

            <div className="inBox">
              <a href="https://www.linkedin.com/company/changeagency1/">
                <img
                  className="inImg"
                  src="https://cdn.statically.io/gh/maximzadoina/change/2705fa3c/src/Res/Img/linked.png"
                  alt="img load error linkedIn"
                ></img>
              </a>
            </div>
          </div>
          <div className="noPadding col-lg-4 col-xl-4 d-none d-sm-none d-md-none d-lg-inline d-xl-inline order-3 order-sm-3 order-md-3 order-lg-3 order-xl-3">
            <div className="emailTxt font5">Email worth opening</div>
            <div className={this.state.showOK}>
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <div className={this.state.showEmailInput}>
              <form>
                <input
                  maxLength="30"
                  name="fullName"
                  onChange={this.updateEmail}
                  type="email"
                  className="bannerEmailInput"
                  placeholder="Your email here"
                ></input>

                <button
                  disabled={!this.state.activeSubscribe}
                  className="btn-toolset btnEmailBanner"
                  onClick={this.subscribe}
                  type="submit"
                >
                  <strong>Subscribe</strong>
                  <span>
                    <i className="icono-arrow1-left arrowBanner"></i>
                  </span>
                </button>
              </form>
              <div className="clickToLearnMorePrivacy">
                  <button
                    data-toggle="modal"
                    data-target="#modalPrivacy"
                    className="privacyBtn"
                  >
                    Click here
                  </button>{" "}
                  to learn more about our Privacy Policy.{" "}
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="noPadding col">
            <div className="bannerRights font7">
              <div
                className="modal fade "
                id="modalPrivacy"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="modalPrivacy"
                aria-hidden="true"
              >
                <div
                  className="privacymodal modal-dialog modal-xl modal-dialog-centered cascading-modal"
                  role="document"
                >
                  <div className=".privacymodal modal-content">
                    <div className="modal-header primary-color white-text">
                      <h4 className="font5 privacyModalTitle">
                        Privacy Policy
                      </h4>
                      <button
                        type="button"
                        className="close  waves-effect waves-light"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          className="closePrivacyModalBtn"
                          aria-hidden="true"
                        >
                          <i className="fas fa-times"></i>
                        </span>
                      </button>
                    </div>
                    <div className="privacyText">
                      <p>
                        This privacy notice discloses the privacy practices for
                        changecy.com . This privacy notice applies solely to
                        information collected by this website. It will notify
                        you of the following:
                        <br /> 1. &nbsp; &nbsp; What personally identifiable
                        information is collected from you through the website,
                        how it is used and with whom it may be shared.
                        <br />
                        2.&nbsp; &nbsp; What choices are available to you
                        regarding the use of your data. <br />
                        3. &nbsp; &nbsp; The security procedures in place to
                        protect the misuse of your information. <br />
                        4. &nbsp; &nbsp; How you can correct any inaccuracies in
                        the information.
                        <br />
                        <br />{" "}
                      </p>
                      <div className="font4">
                        Information Collection, Use, and Sharing
                      </div>{" "}
                      <br />
                      <p>
                        We are the sole owners of the information collected on
                        this site. We only have access to/collect information
                        that you voluntarily give us via email or other direct
                        contact from you. We will not sell or rent this
                        information to anyone.
                      </p>
                      <p>
                        We will use your information to respond to you,
                        regarding the reason you contacted us. We will not share
                        your information with any third party outside of our
                        organization, other than as necessary to fulfill your
                        request, e.g. to ship an order.
                      </p>{" "}
                      <p>
                        Unless you ask us not to, we may contact you via email
                        in the future to tell you about specials, new products
                        or services, or changes to this privacy policy.
                      </p>
                      <br />
                      <div className="font4">
                        Your Access to and Control Over Information{" "}
                      </div>
                      <br />{" "}
                      <p>
                        You may opt out of any future contacts from us at any
                        time. You can do the following at any time by contacting
                        us via the email address or phone number given on our
                        website:{" "}
                      </p>
                      <p>
                        • &nbsp;&nbsp;See what data we have about you, if any.{" "}
                        <br />
                        •&nbsp;&nbsp; Change/correct any data we have about you.{" "}
                        <br />
                        •&nbsp;&nbsp; Have us delete any data we have about you.{" "}
                        <br />
                        •&nbsp;&nbsp; Express any concern you have about our use
                        of your data.
                      </p>{" "}
                      <div className="font4">Security</div> <br />
                      <p>
                        {" "}
                        We take precautions to protect your information. When
                        you submit sensitive information via the website, your
                        information is protected both online and offline.
                        Wherever we collect sensitive information (such as
                        credit card data), that information is encrypted and
                        transmitted to us in a secure way. You can verify this
                        by looking for a lock icon in the address bar and
                        looking for “https” at the beginning of the address of
                        the Web page. While we use encryption to protect
                        sensitive information transmitted online, we also
                        protect your information offline. Only employees who
                        need the information to perform a specific job (for
                        example, billing or customer service) are granted access
                        to personally identifiable information. The
                        computers/servers in which we store personally
                        identifiable information are kept in a secure
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rightsReserved'>
              2020 © Change Agency SRL . All right reserved.{" "}
              <button
                data-toggle="modal"
                data-target="#modalPrivacy"
                className="privacyBtn"
              >
                <strong>Privacy Policy.</strong>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
