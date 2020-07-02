import React from "react";
import { Component } from "react";
import './Main.scss'
import Hamburger from '../Hamburger/Hamburger'
import HomePage from '../HomePage/HomePage';
import NotAboutUs from '../NotAboutUs/NotAboutUs';
import Mantra from '../Mantra/Mantra';
import WhatWeCanDo from '../WhatWeCanDo/WhatWeCanDo';
import Showcases from '../ShowCases/Showcases';
import TheBlog from '../TheBlog/TheBlog'

export default class Main extends Component {
  render(){
      return(
          <div>
              <Hamburger bgColor="topMenuBgColorGrey"/>
          <section id="Home">
              <div className="wrap page1">
                  <HomePage />
              </div>
          </section>
        <section id="NotAboutUs">
            <div className="wrap page2">
              <NotAboutUs />
            </div>
          </section>

          <section id="mantra">
            <div className="wrap page3">
              <Mantra />
            </div>
          </section>

          <section id="wecando">
            <div className="wrap page4">
              <WhatWeCanDo />
            </div>
          </section>

          <section id="showcases">
            <div className="wrap page5">
              <Showcases />
            </div>
          </section>
          <section id="theblog">
            <div className="wrap page6">
              <TheBlog />
            </div>
          </section>
          </div>  

      )
  }
}
