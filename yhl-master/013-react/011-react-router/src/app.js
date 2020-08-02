import React,{ Component,Fragment} from 'react'
import './app.css'
import Todolist from './pages/todolist/index.js'
import { connect } from 'react-redux'


import { 
	BrowserRouter as Router,
	// HashRouter as Router,
 	Route, 
 	Link,
 	Switch 
} from "react-router-dom";



class Home extends Component{
	render(){
		return(

			<h2>this is home </h2>

			)
	}
}
class User extends Component{
	render(){
		console.log(this.props.match.params)

		return(

			<h2>this is User id  {this.props.match.params.id} </h2>

			)
	}
}

class Admin extends Component{
	render(){
		return(
			<Switch>
				<Route  exact path="/admin" render={()=>(<h2> this is admin </h2>)}/>
				<Route  path="/admin/:id" render={(props)=>(<h2> this is admin  {props.match.params.id}</h2>)}/>
				<Route  path="/admin/aritcle" render={()=>(<h2> this is admin aritcle</h2>)}/>

			</Switch>
			)
	}
}

//调用this必须用constructor
class App extends Component {
    
    constructor (props){
    	super(props)
    	this.state ={
    		isAdmin : false
    	}
    }
 //生命周期函数
    render(){
    	 const ProtectedRoute = ({component:Component,...rest })=>{
    	 	return (<Route
    	 				{...rest}
    	 				render= {()=>{
    	 					return this.state.isAdmin ? <Component/> : <h2>no is admin</h2>
    	 			}}


    	 	 />)
    	 }
        return (
        	<Router>
        	<div>	
            	<nav>
            	<ul>
            		<li><Link to="/">Home</Link></li>
					<li><Link to="/Todolist">Todolist</Link></li>	
					<li><Link to="/about">about</Link></li>
					<li><Link to="/user/123">user</Link></li>
					<li><Link to="/admin">admin</Link></li>
					<li><Link to="/admin/123">admin/123</Link></li>
					<li><Link to="/admin/aritcle">admin/aritcle</Link></li>


            	</ul>
            	{
            		//这里是配饰路由的地方(核心)
            	}
				      <Route exact path="/" component={Home} />
				      <Route path="/Todolist" component={Todolist} />
				      <Route path="/about" render={()=>(<h2> this is about </h2>)}/>
				      <Route exact path="/user/:id" component={User} />
				      <ProtectedRoute path="/admin" component={Admin} />
            	</nav>	
            </div>
            </Router>
            )


    }
}


export default connect( null, null)(App)