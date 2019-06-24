import React from 'react';
import {Route, Switch} from "react-router-dom";

import '../css/App.css';

import Banner from './Banner';
import Menu from './Menu';
import ModalContainer from './ModalContainer';

function App() {
  return (
    <div className="App">
      <Banner /> 
      <Switch> 
       <Route exact path = '/' component = {Menu} />
       <Route exact path = '/add' component = {ModalContainer} />
      </Switch>

    </div>
  );
}

export default App;
