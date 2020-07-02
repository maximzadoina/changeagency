import React from "react";
import { Component } from "react";
import {Animated} from "react-animated-css";
import "./Form.scss";
import emailjs from "emailjs-com";

export class ContactModal extends Component {
  constructor() {
    super();
    this.state = {
      clientData: {
        fullName: "",
        companyName: "",
        clientEmail: "",
        clientMsg: "",
      },
      showSendBtn: true,
      showSuccessAlert: false,
      showDangerAlert: false,
      alertMsg: "",
      emptyMsg:'',
      emptyName:'',
      emptyEmail:''
    };
  }

  sendData = (event) => {
    event.preventDefault();
    let correctData = true;

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        this.state.clientData.clientEmail
      )
    ) {
      correctData = false;
      this.setState({
        alertMsg: "Invalid e-mail address!",
        emptyEmail:'emptyInput'
      });
    }

    if (this.state.clientData.clientMsg.length < 10) {
      correctData = false;
      this.setState({
        emptyMsg:'emptyInput',
        alertMsg: "Message too short!",
      });
    }

    if (this.state.clientData.fullName <= 5) {
      correctData = false;
      this.setState({
        emptyName:'emptyInput',
        alertMsg: "Name too short!",
      });
    }

    if (correctData) {
      emailjs
        .send(
          "zoho",
          process.env.REACT_APP_TEMPLATE_ID,
          this.state.clientData,
          process.env.REACT_APP_CLIENT_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
      this.setState({
        showSuccessAlert: true,
        showSendBtn: false,
      });

      setTimeout(() => {
        this.closeFormBtn.click();
        this.setState({
          showSuccessAlert:false,
          showSendBtn:true
        })
      }, 1500);
    } else {
      this.setState({
        showSendBtn: false,
        showDangerAlert: true,
      });
    }
  };

  inputMsgHandler = ({ target }) => {
    let data = "";
    data = target.value;

    this.setState({
      clientData: {
        ...this.state.clientData,
        [target.name]: data,
      },
    });
  };

  inputClickHandler = () => {
    this.setState({
      showDangerAlert: false,
      showSuccessAlert: false,
      showSendBtn: true,
      emptyEmail:null,
      emptyMsg:null,
      emptyName:null
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modalContactForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalContactForm"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered cascading-modal"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header primary-color white-text">
              <h4 className="font5 modalTitle">
                Drop us a message.
                <br className="mobile" /> We will get back to you!
              </h4>
              <button
                ref={(component) => (this.closeFormBtn = component)}
                type="button"
                className="close waves-effect waves-light"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <form>
              <div className="form-group">
                <label className="font3" htmlFor="materialFormNameModalEx1">
                  FULL NAME
                </label>
                <input
                  onClick={this.inputClickHandler}
                  name="fullName"
                  maxLength="30"
                  onChange={this.inputMsgHandler}
                  type="text"
                  id="materialFormNameModalEx1"
                  className={`${this.state.emptyName} form-control form-control-sm`}
                  placeholder="e.g. John Doe"
                ></input>
              </div>

              <div className="form-group">
                <label className="font3" htmlFor="materialFormEmailModalEx1">
                  COMPANY NAME
                </label>
                <input
                  onClick={this.inputClickHandler}
                  name="companyName"
                  maxLength="30"
                  onChange={this.inputMsgHandler}
                  type="text"
                  id="materialFormEmailModalEx1"
                  className="form-control form-control-sm"
                  placeholder="e.g. John S.R.L."
                ></input>
              </div>

              <div className="form-group">
                <label className="font3" htmlFor="exampleInputEmail1">
                  EMAIL ADDRESS
                </label>
                <input
                  onClick={this.inputClickHandler}
                  name="clientEmail"
                  maxLength="30"
                  onChange={this.inputMsgHandler}
                  type="email"
                  className={`${this.state.emptyEmail} form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="e.g. email@email.com"
                ></input>
              </div>

              <div className="form-group">
                <label className="font3" htmlFor="materialFormMessageModalEx1">
                  YOUR MESSAGE
                </label>
                <input
                  onClick={this.inputClickHandler}
                  name="clientMsg"
                  onChange={this.inputMsgHandler}
                  type="text"
                  maxLength="150"
                  id="materialFormMessageModalEx1"
                  className={`md-textarea form-control ${this.state.emptyMsg}`}
                  placeholder="Tell us about the project"
                ></input>
              </div>

              <div className="text-center mt-4 mb-2">
                {this.state.showSendBtn ? (
                  <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={true}><button
                    type="submit"
                    onClick={this.sendData}
                    className="formBtn"
                  >
                    <strong>I WANT A CHANGE</strong>
                    <span className="formArrow">
                      <i className="icono-arrow1-left "></i>
                    </span>
                  </button></Animated>
                ) : null}

                {this.state.showSuccessAlert ? (
                  <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={true}>
                    <div className="font1 alert alert-success" role="alert">
                      Message sent!
                    </div>
                  </Animated>
                ) : null}

                {this.state.showDangerAlert ? (
                  <div>
                  <Animated animationIn="flipInX" animationOut="flipOutX" isVisible={true}>
                    <div className="font5 alert alert-danger" role="alert">
                      {this.state.alertMsg}
                    </div>
                  </Animated></div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactModal;
