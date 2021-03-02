import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLenghthCreator, requiredField } from '../../../utilits/validators/validators';

const maxLegth = maxLenghthCreator(50)
 
const MessengerForm = (props) => {
 
  
  return (
      <form onSubmit={props.handleSubmit}>
        
          <Field component={Textarea} validate={[requiredField, maxLegth]} name="newMessageBody" placeholder="Enter you message"/>
           
        <div>
          <button>Send</button>
          </div>


      </form>
  );
}

export const MessengerFormRedux = reduxForm({form: "dialogAddMessageForm"})(MessengerForm)

export default MessengerForm;