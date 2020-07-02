import React, { Component } from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "./Components/Banner/Banner";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Main from './Components/Main/Main'
import Privacy from './Components/Privacy/Privacy'
import Login from './Components/Login/Login'
import ShowArticle from './Components/ShowArticle/ShowArticle'
import ShowcaseInfo from './Components/ShowcaseInfo/ShowcaseInfo'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div id="container">
          <Route path="/" exact component={Main}/>
          <Route path="/articles/:id" component={ShowArticle}/>
          <Route path="/showcases/:id" component={ShowcaseInfo}/>
          <Route path="/privacy" component={Privacy}/>
          <Route path="/login" component={Login}/>

          <section id="banner">
            <div className="wrap page6">
              <Banner />
            </div>
          </section>
        </div>
        </Router>
    );
  }
}
export default App;
