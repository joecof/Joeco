import React, { Component } from 'react'

import {Route, Switch, withRouter} from "react-router-dom";

import Banner from './Banner';
import Navbar from './Navbar';
import ShopItemContainer from './ShopItemContainer';
import SingleShopItem from './SingleShopItem';

import Footer from './Footer';


import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    }
  }

  componentDidMount() {
    // const token = localStorage.getItem('token');
    // const expiryDate = localStorage.getItem('expiryDate');

    // if(!token || !expiryDate) {
    //   return; 
    // }

    // if(new Date(expiryDate <= new Date())) {
    //   this.logoutHandler();
    //   return; 
    // }

    // const userId = localStorage.getItem('userId');
    // const remainingMilliseconds = 
    //   new Date(expiryDate).getTime() - new Date().getTime(); 
    
    //   this.setState({
    //     token: token,
    //   });

    //   this.setAutoLogout(remainingMilliseconds);
    
  }

  render() {
    return(
      <div className="App">
      <Banner />
      <Navbar />
      <Switch> 
       <Route exact path = '/' component = {ShopItemContainer} />
       <Route
          exact path="/cart/:postId"
          render={props => (
            <SingleShopItem
              {...props}
            />
          )}
        />
      </Switch>
      <Footer />
    
    </div>
    ) 
  }
  


}

export default withRouter(App);
