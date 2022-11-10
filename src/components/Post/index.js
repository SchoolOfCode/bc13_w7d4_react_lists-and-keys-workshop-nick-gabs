import React from 'react';

import './index.css';

function Post({title, date, author, text, highlights, image}) {
  return <article>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <h2>{author}</h2>
    <p>{text}</p>
    {highlights.map((highlight, index)=>{
      return <li key = {highlight.id}>{highlight.text}</li>
    })}
    <img src = {image.link} alt = {image.alt} style={{width: "100px", height: "100px"}}>
    </img>
  </article>;
}

export default Post;
// post.highlights.map()