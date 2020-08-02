import React,{ Component,Fragment} from 'react'
import {  Input,Button,List} from 'antd';
import './index.css'

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'

//调用this必须用constructor
class Home extends Component {
    
 //生命周期函数
    render(){
        return (
               <div className = 'home'>
               </div>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
 

  }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
       
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(Home)