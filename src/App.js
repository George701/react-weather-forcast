import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import GetGeo from './components/geo/GetGeo';
import Index from './components/Index';
import GetCity from './components/city/GetCity'

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="body-container">
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/geo" component={GetGeo}/>
                        <Route exact path="/city/:city" component={GetCity}/>
                    </Switch>
                </div>
            </HashRouter>
        </Provider>
    );
  }
}

export default App;
