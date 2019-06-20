import React from 'react';

import {Route, Switch} from "react-router-dom";


import Banner from './Banner';
import Navbar from './Navbar';
import ShopItemContainer from './ShopItemContainer';
import Login from './Login';
import Footer from './Footer';


import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar /> 

      <Switch> 
       <Route exact path = '/' component = {ShopItemContainer} />
       <Route exact path = '/admin' component = {Login} />
      </Switch>
            
      <Footer />
    
    </div>
  );
}
export default App;
