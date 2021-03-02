import React from 'react';
import s from './Login.module.css';
import { LoginReduxForm } from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../../redux/auth-reduser';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const onSubmit = (formData) =>{
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth){
return<Redirect to={"/home"}/>
  }
  return (
      <div className={s.Css_Login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
  );
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);