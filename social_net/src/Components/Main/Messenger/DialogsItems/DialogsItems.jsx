import React from 'react';
import s from './DialogsItems.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItems = (props) => {
  
  return (
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to={"/messenger/"+props.id}>
          {props.name}
          </NavLink>
          </div>
      </div>
  );
}

export default DialogsItems;