import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Test = () => (
    <h1>
        This is another Page! 
        <NavLink to="/">Go Home</NavLink> 
    </h1>
)

const NotFoundPage = () => (
    <h1>404!</h1>
)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component ={App} exact={true}/>
            <Route path="/create" component={Test} exact={true}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
