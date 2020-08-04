import React,{ Component,Fragment} from 'react'
import { Layout, Menu, Breadcrumb, Icon,Input,Button,List,Dropdown } from 'antd';
import './index.css'
import { getUsername,removeUsername} from 'util'
import apiObj from 'api/index.js'
import axios from 'axios'

const { SubMenu } = Menu;
const { Header} = Layout;
//调用this必须用constructor
class AdminHeader extends Component {
    constructor (props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogout(){
        /*
        axios({
            method:'delete',
            url:'http://127.0.0.1:3000/sessions/users',
        })
        */
        apiObj.logout()
        .then(result=>{
            console.log(result)
            //派发action
            const data = result.data;
            if(data.code == 0){ //获取成功
                //1.清除前台用户信息
                removeUsername()
                //2.返回登录页面
                window.location.href = '/login'
            }else{
                message.error(data.message)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
 //生命周期函数
    render(){
        const menu = (
          <Menu>
            <Menu.Item key="0" onClick = { this.handleLogout }>
                <Icon type="logout" />退出
            </Menu.Item>
          </Menu>
        );
        return (
               <div className = 'AdminHeader'>
                    <Header className="header">
                        <div className="logo">
                        KMALL 后台管理系统
                        </div>
                        <div className="dropdown">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                   {getUsername() }<Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                    </Header>
               </div>
            )
        }
}





export default AdminHeader