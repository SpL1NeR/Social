import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Music from './Components/Main/Music/Music';
import MessengerContainer from './Components/Main/Messenger/MessengerContainer';
import News from './Components/Main/News/News';
import Games from './Components/Main/Games/Games';
import Seting from './Components/Main/Seting/Seting';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './Components/Main/Users/UsersContainer';
import ProfileContainer from './Components/Main/Profile/ProfaileContainer'
import Login from './Components/Main/Login/Login'
import { logout } from './redux/auth-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reduser';
import Preloader from './Components/common/Preloader/Preloader';

class App extends Component{
  componentDidMount(){
    this.props.initializeApp();
  }
render(){
  if (!this.props.initializeApp)
  return<Preloader/>
  return (

    <div className='App-wrapper'>
      <HeaderContainer />
      <Nav />
      <div><Route path="/home/:userId?"
        render={() =>
          <ProfileContainer/>} />

        <Route path="/users"
          render={() =>
            <UsersContainer />
          } />

        <Route path="/messenger"
          render={() =>
            <MessengerContainer
            />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/games" render={Games} />
        <Route path="/seting" render={Seting} />
        <Route path="/login"render={() =><Login/>} />
       
      </div>
      <Footer />
    </div>

  );
}}
const mapStateToProps=(state) =>({
initialized : state.app.initializeApp
})
export default compose (
  withRouter,
  connect( mapStateToProps, {initializeApp, logout}))(App)
