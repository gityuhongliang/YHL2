import React,{ Component,Fragment} from 'react'
import './app.css'
import Todolist from './pages/todolist/index.js'
import { connect } from 'react-redux'
//调用this必须用constructor
class App extends Component {
    
 //生命周期函数
    render(){
        return (
                <Todolist />
            )
    }
}


export default connect( null, null)(App)