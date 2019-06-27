import React from 'react';
import {Route, Switch} from "react-router-dom";

import '../css/App.css';

import Banner from './Banner';
import Menu from './Menu';
import Modal from './Modal';
import DeleteItemView from './DeleteItemView';
import EditItemView from './EditItemView';
import ViewItemView from './ViewItemView';

import DeleteItem from './DeleteItem';
import ViewItem from './ViewItem';
import EditItem from './EditItem';



function App() {
  return (
    <div className="App">
      <Banner /> 
      <Switch> 
        <Route exact path = '/' component = {Menu} />
        <Route exact path = '/add' component = {Modal} />
        <Route exact path = '/delete' component = {DeleteItemView} />
        <Route exact path = '/edit' component = {EditItemView} />
        <Route exact path = '/view' component = {ViewItemView} />

        <Route
          exact path="/delete/:postId"
          render={props => (
            <DeleteItem
              {...props}
            />
          )}
        />

        <Route
          exact path="/edit/:postId"
          render={props => (
            <EditItem
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
