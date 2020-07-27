import React,{ Component,Fragment} from 'react'
import './app.css'
import Item from './item.js'

// 在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
// render方法的return语句后面不能是空白行,可以用()来格式化代码 
// 在返回组件内容时,如果不想有多余的标签,可以使用React.Fragment来代替html标签

// this.setState方法改变数据会引起页面数据的变化

// 组件的生命周期
// 挂载,当组件实例被创建并插入 DOM 中时,其生命周期调用顺序

//调用this必须用constructor
class App extends Component {



    //生命周期函数 在某个时刻组件会自动执行的函数
    constructor(props){
        console.log('App constructor(props)')
        super(props)
        //初始化数据
        this.state={
            list:['吃饭','吃饭','吃饭'],
            task:''//赋值为空在下面再让输入框value值等于task 就等于清空操作
        }


        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }


    //生命周期函数
    // 多用于如果props有变化,需要更新state的场景,该方法返回state的更新
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps');
        console.log('getDerivedStateFromProps,props',props);
        console.log('getDerivedStateFromProps,state',state);
        return{
            null
        }
    }


    //生命周期函数 组件挂载完毕执行,多用于发送ajax获取数据
    componentDidMount(){
        console.log('componentDidMount');
    }

    handleClick(){
        // console.log(this)
        const attr = [...this.state.list];
        attr.push(this.state.task);
        this.setState((preState)=>({
            // preState能拿到上一个this.state数据
            //this.setState可以当成更新this.state数据的方法
            list:attr,
            task:''
        }))
    }
 



    handleChange(ev){

        // const val =ev.target.value 
        // console.log(this.input)
        const val =this.input.value 
      
        // this.state.task = val
        this.setState((preState)=>({
            task:val
        }),()=>{
            // 由于setState是一个异步方法,如果需要获取最新的Dom,需要写在setState方法的第二个回调函数中
             console.log(this.input)
        })
    }




    handleDel(index){
        const attr = [...this.state.list];
        attr.splice(index,1)
        this.setState((preState)=>({
            list:attr
        }))
    }



    getItems(){
        return this.state.list.map((item,index)=>{
                return(
                    <Item 
                        task={ item }
                        list={ this.state.list }
                        key={ index } 
                        index={ index }
                        handleDel={ this.handleDel.bind(this,index)}
                    />
                )
            })
    }



    //生命周期函数
    render(){
        console.log('render')
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
                    //ref属性获取DOM节点
                    //input等于this(APP组件).input = input 等于把input存在App组件上
                    ref = { (input)=>{ this.input = input}}

                    // value = { this.state.task.bind(this)}
                    value = { this.state.task}
                     // onChange={ this.handleChange.bind(this)}
                    onChange={ this.handleChange}/>

                <button className ='btn' 
                    // onClick={this.handleClick.bind(this)}
                    onClick={this.handleClick}>

                提交

                </button>
                <ul className='list'>
                    {
                        /* this.state.list.map((item,index)=>{
                        //         return(
                        //             <Item 
                        //                 task={ item }
                        //                 list={ this.state.list }
                        //                 key={ index } 
                        //                 index={ index }
                        //                 handleDel={ this.handleDel.bind(this,index)}
                        //             />
                        //         )
                             })
                         */
                        this.getItems()
                    }
                </ul>
                </div>
                </Fragment>
            )
        }
}

export default App