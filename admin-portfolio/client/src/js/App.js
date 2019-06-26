import React from 'react';
import {Route, Switch} from "react-router-dom";

import '../css/App.css';

import Banner from './Banner';
import Menu from './Menu';
import Modal from './Modal';
import DeleteItemView from './DeleteItemView';
import ItemView from './ItemView';
import SingleItem from './SingleItem';
import ViewItem from './ViewItem';




function App() {
  return (
    <div className="App">
      <Banner /> 
      <Switch> 
        <Route exact path = '/' component = {Menu} />
        <Route exact path = '/add' component = {Modal} />
        <Route exact path = '/delete' component = {DeleteItemView} />
        <Route exact path = '/view' component = {ItemView} />

        <Route
          exact path="/delete/:postId"
          render={props => (
            <SingleItem
              {...props}
            />
          )}
        />

          <Route
            exact path="/view/:postId"
            render={props => (
              <ViewItem
                {...props}
              />
            )}
        />



      </Switch>

    </div>
  );
}

export default App;
