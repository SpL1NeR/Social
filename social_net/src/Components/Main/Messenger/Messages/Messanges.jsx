import React from 'react';
import s from './Messanges.module.css';

const Messanges = (props) => {
  
         
  return (
     <div className={s.messages}>
      <div className={s.dialog}>{props.message}</div>
      </div>
      );
}

export default Messanges;