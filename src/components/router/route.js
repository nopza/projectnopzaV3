import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Register from '../Page/Register';



class Routing extends Component {

  render() { 
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
        </Switch>

    );
  }
}

export default Routing;
