import React,{ Component,Fragment} from 'react'
import './app.css'
import { connect } from 'react-redux'

import Todolist from './pages/todolist/index.js'
import Login from './pages/login/index.js'


import { 
	BrowserRouter as Router,
	// HashRouter as Router,
 	Route, 
 	Link,
 	Switch,
    Redirect
} from "react-router-dom";

import { getUsername } from './util/index.js';
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
    				    <TodolistRoute exact path="/" component={Todolist} />
    				    <LoginRoute path="/login" component={Login} />
                    </Switch>				   
                </div>
            </Router>
            )


    }
}


export default connect( null, null)(App)