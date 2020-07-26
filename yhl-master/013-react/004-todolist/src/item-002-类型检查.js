
import React,{ Component,Fragment} from 'react'
import PropTypes from 'prop-types'


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
   
	render(){
		// console.log(this.props)
		const { handleDel,task } = this.props
		return(

			// <li onClick= {this.props.handleDel}>{this.props.task}</li>
			<li onClick= { handleDel} >{ task }</li>

		)

	}
}
//类型检查

Item.propTypes = {
	handleDel:PropTypes.func,//验证是否是函数
	task:PropTypes.string.isRequired//必须填入数据
}

//定义默认值
Item.defaultProps = {
	task:'aaaaaaaaaaa'
}

export default Item