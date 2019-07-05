import React, { Component } from 'react'

import {Redirect, Route, Switch, withRouter} from "react-router-dom";

import '../css/App.css';

import Banner from './Banner';
import Menu from './Menu';

import Login from './Login';
import Signup from './Signup';

import Modal from './Modal';
import DeleteItemView from './DeleteItemView';
import EditItemView from './EditItemView';
import ViewItemView from './ViewItemView';

import DeleteItem from './DeleteItem';
import ViewItem from './ViewItem';
import EditItem from './EditItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      isAuth: false, 
      signedUp: false,
      token: null,
      userId: null, 
      error: null,
      redirect: false
    }

    this.logoutHandler = this.logoutHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.setAutoLogout = this.setAutoLogout.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');

    if(!token || !expiryDate) {
      return; 
    }

    if(new Date(expiryDate <= new Date())) {
      this.logoutHandler();
      return; 
    }

    const userId = localStorage.getItem('userId');
    const remainingMilliseconds = 
      new Date(expiryDate).getTime() - new Date().getTime(); 
    
      this.setState({
        isAuth: true, 
        token: token,
        userId: userId
      });

      this.setAutoLogout(remainingMilliseconds);
  }

  logoutHandler() {
    this.setState({
      isAuth: false, 
      token: null
    })
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  }

  setAutoLogout(milliseconds) {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  loginHandler = (event, authData) => {
    event.preventDefault();

    fetch("http://localhost:4001/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
      })
    })
    .then(res => {
      if(res.status === 422) {
        throw new Error(
          "Validation failed!"
        );
      }
      if(res.status !== 200 && res.status !== 201) {
        console.log('Error!');
        throw new Error('Authentication failed!');
      }
      return res.json();
    })
    .then(resData => {
      this.setState({
        isAuth: true, 
        token: resData.token,
        userId: resData.userId
      });

      localStorage.setItem('token', resData.token);
      localStorage.setItem('userId', resData.userId);

      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
      );
      localStorage.setItem('expiryDate', expiryDate.toISOString());
      this.setAutoLogout(remainingMilliseconds);
    })
    .catch(err => {
      console.log(err);
      this.setState({
        isAuth: false,
        error: err
      });
    });
  };

  errorHandler() {
    this.setState({
      error: null
    })
  }

  signupHandler = (event, authData) => {
    event.preventDefault();

    let url = "http://localhost:4001/auth/signup";
    let method = 'PUT';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        name: authData.name
      })
    })
    .then(res => {
      if(res.status === 422) {
        throw new Error(
          "validation failed. make sure email isn't used yet!"
        );
      }
      if(res.status !== 200 && res.status !== 201) {
        console.log('error!');
        throw new Error('Creating a user failed!');
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData);

      this.setState({
        isAuth: false,
        redirect: true
      })

      this.props.history.replace('/');

    })
    .catch(err => {
      console.log(err);
      this.setState({
        isAuth: false,
        error: err
      })
    })
  }

  render() {

    let routes = (
      <Switch> 
        <Route
          path="/"
          exact
          render={props => (
            <Login
              {...props}
              onLogin = { this.loginHandler }
            />
          )}
        />

        <Route
          path="/signup"
          exact
          render={props => (
            <Signup
              {...props}
              onSignup={this.signupHandler}
            />
          )}
        />

        <Redirect to = '/' />
        
      </Switch>
    );

    if(this.state.isAuth) {
      routes = (
        <Switch>

          <Route
            path="/"
            exact
            render={props => (
              <Menu 
                {...props}
                userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Route
            path="/add"
            exact
            render={props => (
              <Modal 
                {...props}
                userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Route
            path="/delete"
            exact
            render={props => (
              <DeleteItemView
                {...props}
                userId={this.state.userId} token={this.state.token} />
            )}
          />

          <Route
            path="/edit"
            exact
            render={props => (
              <EditItemView 
                {...props}  
                userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Route
            path="/view"
            exact
            render={props => (
              <ViewItemView 
                {...props}
                userId={this.state.userId} token={this.state.token} />
            )}
          />

          <Route
            exact path="/delete/:postId"
            render={props => (
              <DeleteItem userId={this.state.userId} token={this.state.token}
                {...props}
              />
            )}
          />

          <Route
            exact path="/edit/:postId"
            render={props => (
              <EditItem userId={this.state.userId} token={this.state.token}
                {...props}
              />
            )}
          />

          <Route
            exact path="/view/:postId"
            render={props => (
              <ViewItem userId={this.state.userId} token={this.state.token}
                {...props}
              />
            )}
          />
        </Switch>
      )
    }

    return (
      <div className="App">

        <Banner /> 
        { routes }
    
      </div>      
    )
  }
}

export default withRouter(App);

