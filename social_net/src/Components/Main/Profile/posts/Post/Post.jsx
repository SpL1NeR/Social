import React from 'react';
import s from './Post.module.css';


const Post = React.memo( (props) => {  
  return (
   
         <div className={s.posts}>
         {props.message} {props.likeCount}
         </div> 
         
  );
})

export default Post;