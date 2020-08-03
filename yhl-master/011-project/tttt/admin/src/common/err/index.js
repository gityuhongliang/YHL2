import React,{ Component,Fragment} from 'react'

import './index.css'

import { Alert,Button } from 'antd';

import { 
    BrowserRouter as Router,
    // HashRouter as Router,
    Route, 
    Link,
    Switch,
    Redirect
} from "react-router-dom";
//调用this必须用constructor
//容器组件
class Err extends React.Component {
 
    render() {
      return (
          <div className='err'>
            <Alert
                message="Error"
                description="请求出错，请确认地址."
                type="error"
                showIcon
            />
            <Link to = ''><Button type="link">返回上一页</Button></Link>
          </div>
      )
    }
}


export default  Err