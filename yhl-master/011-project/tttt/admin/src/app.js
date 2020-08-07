import React,{ Component,Fragment} from 'react'
import './app.css'
import { connect } from 'react-redux'

import Home from 'pages/home'
import Login from 'pages/login'
import Err from 'common/err'
import User from 'pages/user'
import Category from 'pages/Category'
import Product from 'pages/product'

import { 
    BrowserRouter as Router,
    // HashRouter as Router,
    Route, 
    Link,
    Switch,
    Redirect
} from "react-router-dom";

import { getUsername } from 'util';
//调用this必须用constructor
class App extends Component {
    
 //生命周期函数
    render(){
        const TodolistRoute = ({ component: Component, ...rest }) => (
            <Route 
                {...rest} 
                render={(props) => {
                    return getUsername() ? <Component /> : <Redirect to="/login" />
                }}
            />
        )
        const LoginRoute = ({ component: Component, ...rest }) => (
            <Route 
                {...rest} 
                render={(props) => {
                    return getUsername() ? <Redirect to="/" /> : <Component />
                }}
            />
        )
        return (
            <Router>
                <div>
                    <Switch>              
                        <TodolistRoute exact path="/" component={Home} />
                        <TodolistRoute  path="/user" component={User} />
                        <TodolistRoute  path="/category" component={Category} />
                        <TodolistRoute  path="/product" component={Product} />
                        <LoginRoute path="/login" component={Login} />
                        <Route component = {Err}/>
                    </Switch>                  
                </div>
            </Router>
            )


    }
}


export default connect( null, null)(App)