import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import test1 from './test1'
import test2 from './test2'

class RouterConfigs extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                <Route path="/test1" component={test1} />
                <Route path="/test2" component={test2} />
                </App>
            </HashRouter>
        );
    }
}

export default RouterConfigs;