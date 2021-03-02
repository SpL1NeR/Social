import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import  { PostsFormRedux } from './PostsForm';



const Posts = (props) => {

  let postElement =
    props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let AddPost = (values) => {

    props.addPost(values.newPostElemen);

  }
  

  return (

    <div className={s.Css_Posts}>
      <div className={s.posts}>
        {postElement}</div>
<PostsFormRedux onSubmit={AddPost}/>
      <div className={s.posts}>
        {props.message} {props.likeCount}
      </div>
    </div>
  );
}

export default Posts;