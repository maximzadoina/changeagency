import React from "react";
import { Component } from "react";
import "./TheBlog.scss";
import axios from "axios";
import Article from "./Article/Article";

export default class TheBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }
  componentDidMount() {

    axios.get("/articles/").then((response) => {
      console.log(Object.values(response.data));
      this.setState({
        articles: Object.values(response.data),
      });
    });

    (function() {
      function scrollHorizontally(e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          document.getElementById('scrollArticles').scrollLeft -= (delta*100); // Multiplied by 40
          e.preventDefault();
      }
      if (document.getElementById('scrollArticles').addEventListener) {
          // IE9, Chrome, Safari, Opera
          document.getElementById('scrollArticles').addEventListener("mousewheel", scrollHorizontally, false);
          // Firefox
          document.getElementById('scrollArticles').addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
          // IE 6/7/8
          document.getElementById('scrollArticles').attachEvent("onmousewheel", scrollHorizontally);
      }
  })();

  console.log(this.state.articles)
  }

  getMonth = (month) => {   
    let m = parseInt(month);
    switch (m) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return null;
    }
  };

  render() {
    let title = (
      <div key={0}>
        <div className="font5 theBlogTitle">Damn Good Resources</div>
        <div className="font2 theBlogSubtitle">
          To afraid to change your mind?
        </div>
      </div>
    );

    if (this.state.articles) {
      return [
        title,
        <div key={199} id="scrollArticles"className="articlesList">
          {
          this.state.articles.map((article, i) => {

            //let month = article.createdAt.substring(5, 7);
           // month = this.getMonth(month);
           // let date=month+' '+article.createdAt.substring(8,10)+', '+article.createdAt.substring(0,4)
            return (
              <Article
                key={i}
                id={article._id}
                articleImg='https://cdn.statically.io/gh/maximzadoina/change/72e419d3/change/src/Res/Img/pr3.png'
                articleTitle={`${article.articleTitle}aaaaaaaaaaaaaaaaa`}
                readTime={`${article.articleDuration} min`}
                articleDate={`${article.createdAt}`}
              />
            );
          })}
        </div>,
      ];
    }
  }
}
