
import React,{ Component,Fragment} from 'react'
// 单向数据流
// 父组件可以给子组件传值,但子组件不能改变父组件的值

// 父组件给子组件传递参数
// 父组件定义属性并赋值
// 子组件通过 this.props.属性名  来接收
// 注意点
// 	this.props存放组件的外部数据

//调用this必须用constructor
class Item extends Component{
    constructor(props){
       super(props)
    }
    handleDelete(){

    }
	render(){
		// console.log(this.props)
		return(

			<li onClick= {this.props.handleDel}>{this.props.task}</li>

		)

	}

}



export default Item