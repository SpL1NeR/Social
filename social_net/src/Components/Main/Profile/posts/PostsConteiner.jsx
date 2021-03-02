import { addPostActionCreator} from '../../../../redux/profile-reduser';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
addPost: (newPostElemen) => {
  dispatch(addPostActionCreator(newPostElemen))
}
  }
}
const PostsConteiner = connect(mapStateToProps , mapDispatchToProps)(Posts);

export default PostsConteiner;