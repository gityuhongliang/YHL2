import React,{ Component,Fragment} from 'react'
import './app.css'

// 在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
// render方法的return语句后面不能是空白行,可以用()来格式化代码 
// 在返回组件内容时,如果不想有多余的标签,可以使用React.Fragment来代替html标签


// this.setState方法改变数据会引起页面数据的变化
//调用this必须用constructor
class App extends Component {
  
    constructor(props){
        super(props)
        this.state={
            list:['吃饭','吃饭','吃饭'],
            task:''//赋值为空在下面再让输入框value值等于task 就等于清空操作
        }
    }
	handleClick(){
		// console.log(this)
        const attr = [...this.state.list];
        attr.push(this.state.task);
        this.setState({
            //this.setState可以当成更新this.state数据的方法
            list:attr,
            task:''
        })
	}
 
	handleChange(ev){
		// console.log(ev.target.value);
        const val =ev.target.value 
        // this.state.task = val
        this.setState({
            task:val
        })
	}
    handleDel(index){
        const attr = [...this.state.list];
        attr.splice(index,1)
        this.setState({
            list:attr
        })
    }
 	render(){
    return (
    		<Fragment>
    		{
    		//<input style={{width:200,height:35}}/>
    		//<button style={{width:200,height:35}}>提交</button>
    		}
    		<div className='app'>
    		

            {/*让输入框的value值等于task 就等于value = ''*/}
            {
                //获取输入框的数据
                // 给输入框添绑定onChange事件
                // 在onChange的事件函数中通过event.target.value获取值,将获取到的值赋值给this.state
            }
    		<input className='input' 
            value = { this.state.task}
            onChange={ this.handleChange.bind(this)} />
    		<button className ='btn' onClick={this.handleClick.bind(this)}>提交</button>
    		<ul className='list'>
	    		{
                    this.state.list.map((item,index)=>{
                        return(
                            <li key={index}
                                onClick={this.handleDel.bind(this)}
                            >{ item }</li>
                        )
                    })
                }
    		</ul>
    		</div>
    		</Fragment>
    	)
  }
}

export default App
