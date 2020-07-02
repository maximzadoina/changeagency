import React, { Component } from "react";
import Showcase from "./Showcase/Showcase";
import "./Showcases.scss";
import axios from "axios";
axios.defaults.baseURL="http://127.0.0.1:5000/"
export class Showcases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }


  componentDidMount() {
    var ip = require("ip");
    console.log ( ip.address() );
    axios
      .get("showcases/")
      .then((response) => {
        console.log(response)
        this.setState({
          projects: Object.values(response.data),
        });
      })
  }

  render() {
    
        let title = (
      <div key={0} className="showcasesRow row">
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 offset-1 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
          <span>
            <i id="wedo" className="showcasesArrow icono-arrow1-right"></i>
          </span>
          <div className="font1 showCasesTitle">Showcases</div>

          <div className="font2 showCasesSubtitle">Not only blablablabla.</div>
        </div>
      </div>
    );
  
    

    if (this.state.projects) {
      return [
        title,<div key={199} className="showcasesList">
        {this.state.projects.map((project, i) => {

            return (
                <Showcase
                       key={i}
                       id={project._id}
                       imgLink='https://digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg'
                       title={`${project.showcaseTitle}`}
                       serviceType={`${project.serviceType}`}
                />
            );
        })}</div>];
    }
  }
}

export default Showcases;
