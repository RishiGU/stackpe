import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import LogedinPage from './pages/LogedinPage';

import './App.css'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logedin" component={LogedinPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
