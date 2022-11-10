import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
 

  return <main id="main"> {posts.map(({postId,title, date, author, test, highlights})=>{
    return <Post key={postId} title={title} date={date} author={author} test={test} highlights={highlights}/>
  })}</main>;
}

export default Main;
