import React,{ Component,Fragment} from 'react'

import { connect } from 'react-redux' 

import { 
   
    Route, 
    Link,
    Switch
} from "react-router-dom";


import CategoryAdd from './add.js'
import CategoryList from './list.js'



//调用this必须用constructor
class Category extends Component {
  
 //生命周期函数
    render(){
      
        return (
                <div className = 'Category' >
                <Switch>
                  <Route  path="/Category/add" component={CategoryAdd} />
                  <Route  path="/Category" component={CategoryList} />
                  
                </Switch>

                </div>
            )
        }
}




export default Category