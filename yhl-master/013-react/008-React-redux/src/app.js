import React,{ Component,Fragment} from 'react'
import {  Input,Button,List} from 'antd';
import store from './store/index.js'
import './app.css'

import { connect } from 'react-redux' 

import {getChangeItemAction,getAddItemAction,getDelItemAction,getLoadDataAction,getRequestLoadDataAction}  from './store/actioncreator.js'

import axios from 'axios'

//调用this必须用constructor
class App extends Component {
    componentDidMount(){
       this.props.handleInit()
    }
 //生命周期函数
    render(){
        const {task,list,handleChange,handleClick,handleDel} =this.props
        return (
                <Fragment>
                <div className='app'>
                {/*让输入框的value值等于task 就等于value = ''*/}
                {
                //获取输入框的数据
                // 给输入框添绑定onChange事件
                // 在onChange的事件函数中通过event.target.value获取值,将获取到的值赋值给this.state
                }
                <Input className='input'
                    //ref属性获取DOM节点
                    //input等于this(APP组件).input = input 等于把input存在App组件上
                    ref = { (input)=>{ this.input = input}}

                    // value = { this.state.task.bind(this)}
                    value = {task}

                    // onChange={ this.handleChange.bind(this)}
                    onChange={ handleChange}
                />

                <Button className ='btn' 
                    type="primary"

                    // onClick={this.handleClick.bind(this)}
                    onClick={handleClick}>
                提交
                </Button>
                 <List style={{marginTop:10}}
                          bordered
                          dataSource={list}
                          renderItem={(item,index) =>
                           <List.Item 
                           onClick={  ()=>{handleDel(index)}}>
                           {item}
                           </List.Item>}
                 />
                   

                </div>
                </Fragment>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    task:state.task,
    list:state.list,

  }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
        handleChange(ev){
            const val =ev.target.value 
            dispatch(getChangeItemAction(val))
        },
        handleClick(){
            dispatch(getAddItemAction())
        },
        
        handleDel(index){
            dispatch(getDelItemAction(index))
        },
        handleInit(){
            dispatch(getRequestLoadDataAction())
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(App)