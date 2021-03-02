import React from 'react';
import s from'./Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
  return (
    
      <div className={s.Css_Nav}>
        <div className={s.item}><NavLink to="/home" activeClassName={s.active}>Home</NavLink></div>
        <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
        <div className={s.item}><NavLink to="/messenger" activeClassName={s.active}>Messenger</NavLink></div>
        <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/games" activeClassName={s.active}>Games</NavLink></div>
        <div className={s.item}><NavLink to="/seting" activeClassName={s.active}>Seting</NavLink></div>
        </div>
            );
}

export default Nav;