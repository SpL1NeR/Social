import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLenghthCreator } from '../../../../utilits/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength = maxLenghthCreator(15)

const PostsForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <Field validate = {[requiredField, maxLength] }component={Textarea} name="newPostElemen" placeholder="Enter you posts" />
        <div><button className="js_Add_post" >Add post </button></div>
      </form>
  );
}

export const PostsFormRedux = reduxForm({form: "profileAddPostsForm"})(PostsForm)

export default PostsForm;