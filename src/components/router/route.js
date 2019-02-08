import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Register from '../Page/Register';
import login from '../Login/login';
import location from '../Login/location';
import SendPatient from '../Page/Sendpatient/SendPatient';



class Routing extends Component {

  render() { 
    return (
        <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/location" component={location} />
            <Route exact path="/home" component={Home} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/sendpatient" component={SendPatient} />
        </Switch>

    );
  }
}

export default Routing;
