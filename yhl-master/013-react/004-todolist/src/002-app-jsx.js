import React,{ Component,Fragment} from 'react'
// 在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
// render方法的return语句后面不能是空白行,可以用()来格式化代码 
// 在返回组件内容时,如果不想有多余的标签,可以使用React.Fragment来代替html标签
class App extends Component {
  render(){
    return (
    		<Fragment>
    		{
    		//<input style={{width:200,height:35}}/>
    		//<button style={{width:200,height:35}}>提交</button>
    		}

    		</Fragment>
    	)
  }
}

export default App
