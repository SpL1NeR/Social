import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { requiredField } from '../../../utilits/validators/validators';
import s from '../../common/FormsControls/FormsControls.module.css';


const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
          <div>
            <Field validate={[requiredField]} name={"email"} placeholder={"Email"} component={Input}/>
          </div>
          <div><Field validate={[requiredField]} name={"password"} placeholder={"Password"} type={"password"}component={Input}/></div>
          <div><Field  name={"rememberMe"} type={"checkbox"} component={Input} />Remember me</div>
          {props.error && <div className={s.formSummaryError}>{props.error}</div>}
          <div><button>Login</button></div>

        </form>
        )
}
        export default LoginForm

        export const LoginReduxForm =  reduxForm({form:'login'})(LoginForm)
