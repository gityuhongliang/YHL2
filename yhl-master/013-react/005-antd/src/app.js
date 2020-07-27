import React,{ Component,Fragment} from 'react'
import './app.css'
import Item from './item.js'
import {  Input,Button,List} from 'antd';
// import 'antd/dist/antd.css';
// 在jsx语法中使用组件分为html组件和自定义组件,自定义组件必须大写字母开头
// render方法的return语句后面不能是空白行,可以用()来格式化代码 
// 在返回组件内容时,如果不想有多余的标签,可以使用React.Fragment来代替html标签

// this.setState方法改变数据会引起页面数据的变化


// 组件的生命周期
// 更新,当组件的 props 或 state 发生变化时会触发更新,组件更新的生命周期调用顺序

//调用this必须用constructor
class App extends Component {

//生命周期函数开始
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
            
        }
    }


    // 该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate(nextProps, nextState)',nextProps, nextState);
        if (nextState.task == 'a') {
            return false
        }else{
            return true
        }
    }


    //生成快照 把之前的数据存起来
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState);
        // 该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
        return {
            name:'tom',
            age:18
        }
    }



    //组件更新完成后执行
    componentDidUpdate(prevProps, prevState,snapshot){
        console.log('componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot);

    }



    //生命周期函数 组件挂载完毕执行,多用于发送ajax获取数据
    componentDidMount(){
        console.log('componentDidMount');
    }
//结束

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

        const val =ev.target.value 
        // console.log(this.input)
        // const val =this.input.value 
      
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
                <Input className='input'

                    //ref属性获取DOM节点
                    //input等于this(APP组件).input = input 等于把input存在App组件上
                    ref = { (input)=>{ this.input = input}}

                    // value = { this.state.task.bind(this)}
                    value = { this.state.task}
                     // onChange={ this.handleChange.bind(this)}
                    onChange={ this.handleChange}
                />

                <Button className ='btn' 
                    type="primary"
                    // onClick={this.handleClick.bind(this)}
                    onClick={this.handleClick}>
                提交
                </Button>
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
                        // this.getItems()


                     }

                 <List style={{marginTop:10}}
                          bordered
                          dataSource={this.state.list}
                          renderItem={(item,index) =>
                           <List.Item 
                           onClick={ this.handleDel.bind(this,index)}>
                           {item}
                           </List.Item>}
                 />
                   

                </div>
                </Fragment>
            )
        }
}

export default App