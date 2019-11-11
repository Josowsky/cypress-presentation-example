import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Form } from './components/Form/Form';
import { Login } from './components/Login/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
