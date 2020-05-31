import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home, HomeData } from './home';
import {Login} from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />,
          <Route path='/login' component={Login} exact />
        </Switch>
        <HomeData/>
      </div>
    </BrowserRouter>

  );
}

export default App;
