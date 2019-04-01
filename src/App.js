import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import GetGeo from './components/GetGeo';
import Index from './components/Index';
import GetCity from './components/GetCity'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="body-container">
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/geo" component={GetGeo}/>
                        <Route exact path="/city" component={GetCity}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
