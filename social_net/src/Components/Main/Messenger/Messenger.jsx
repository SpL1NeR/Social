import React from 'react';
import s from './Messenger.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messanges from './Messages/Messanges';
import { MessengerFormRedux } from './MessengerForm';

const Messenger = (props) => {
  
  let state =props.messangesPage;
  
  //треба писати перше масив а потім параметри
  let messageElement = state.messanges.map( p => <Messanges message={p.message} key={p.id}/>);
  let dialogElement = state.dialog.map( p => <DialogsItems name={p.name} key={p.id} id={p.id}/>);

  let addNewMessage = (values) =>{
    props.sendMessage(values.newMessageBody);
  }


  return (
    <div className={s.dialogs + ' ' + s.Css_Messenger}>
      <div className="Interlocutor">
      <div className={s.Dialogs}>
     {dialogElement} 
     </div>
 
     </div>
          <div className={s.Messang}>
    
      <div>{messageElement}</div>
 <MessengerFormRedux onSubmit={addNewMessage} />
     </div>
    </div>
  );
}


export default Messenger;