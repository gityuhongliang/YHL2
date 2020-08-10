import React,{ Component,Fragment} from 'react'

import { connect } from 'react-redux' 

import { 
   
    Route, 
    Link,
    Switch
} from "react-router-dom";

import './index.css'
import ProductSave from './save.js'
import ProductList from './list.js'
import ProductDetail from './detail.js'



//调用this必须用constructor
class Product extends Component {
  
 //生命周期函数
    render(){
      
        return (
                <div className = 'Product' >
                <Switch>
                  <Route  path="/product/save/:productId?" component={ProductSave} />
                  <Route  path="/product/detail/:productId?" component={ProductDetail} />
                  <Route  path="/product" component={ProductList} />
                  
                </Switch>

                </div>
            )
        }
}




export default Product