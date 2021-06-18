import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <NavLink activeClassName="active" to="/login">Login</NavLink>
          <NavLink exact activeClassName="active" to="/">Home</NavLink> */}
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/forget_password" component={ForgetPassword} />
          </Switch>
        </div>
      </BrowserRouter>      
    </div>
  );
}

export default App;
