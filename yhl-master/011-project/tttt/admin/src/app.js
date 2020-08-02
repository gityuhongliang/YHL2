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
 	Switch 
} from "react-router-dom";


//调用this必须用constructor
class App extends Component {
    
 //生命周期函数
    render(){
        
        return (
        	<Router>
        	    <div>	          
				    <Route exact path="/" component={Todolist} />
				    <Route path="/login" component={Login} />				   
                </div>
            </Router>
            )


    }
}


export default connect( null, null)(App)