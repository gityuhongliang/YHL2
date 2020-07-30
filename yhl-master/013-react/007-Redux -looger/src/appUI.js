import React,{ Component,Fragment} from 'react'
import './app.css'
import {  Input,Button,List,Row,Col} from 'antd';

// import 'antd/dist/antd.css';
// 在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
// render方法的return语句后面不能是空白行,可以用()来格式化代码 
// 在返回组件内容时,如果不想有多余的标签,可以使用React.Fragment来代替html标签

// this.setState方法改变数据会引起页面数据的变化

// 组件的生命周期
// 更新,当组件的 props 或 state 发生变化时会触发更新,组件更新的生命周期调用顺序



//UI组件
//调用this必须用constructor
class AppUI extends Component {

    //生命周期函数
    render(){
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
                    value = { this.props.task}

                    // onChange={ this.handleChange.bind(this)}
                    onChange={ this.props.handleChange}
                />

                <Button className ='btn' 
                    type="primary"

                    // onClick={this.handleClick.bind(this)}
                    onClick={this.props.handleClick}>
                提交
                </Button>
                 <List style={{marginTop:10}}
                          bordered
                          dataSource={this.props.list}
                          renderItem={(item,index) =>
                           <List.Item 
                           onClick={  ()=>{this.props.handleDel(index)}}>
                           {item}
                           </List.Item>}
                 />
                   

                </div>
                </Fragment>
            )
        }
}

export default AppUI