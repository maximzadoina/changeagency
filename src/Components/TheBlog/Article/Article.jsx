import React from 'react'
import './Article.scss'

export default  (props)=> {
        return(
            <div className="articleBox">
  <div>
      <img className="articleImg" src={props.articleImg} alt="img not found"></img>
    </div>
        <div className="articleDate font7">
          {props.articleDate}
        </div>
    <div className="font2 requiredTime">
      {props.readTime}
    </div>
    <div className="articleTitle font5">{props.articleTitle}</div>
    <div className='readArticle font3'>Read </div>
    </div>
        )
}