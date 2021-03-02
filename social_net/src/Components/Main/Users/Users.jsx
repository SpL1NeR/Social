import React from 'react';
import s from './Users.module.css';
import logo_notFound from '../../../image/logo_notFound.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import { usersAPI } from '../../../api/api';


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++)
    pages.push(i);

  return (
    <div className={s.Css_Users}>
      <div>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
          )
        })

        } </div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/home/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : logo_notFound} className={s.userPhoto}></img>
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Follow</button>}

              </div>
            </span>

            <span>
              <span>
                <div >{u.name}</div>
                <div>{u.status}</div>
              </span>
            </span>
          </div>)
      }
    </div>
  );
}



export default Users;