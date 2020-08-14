import React,{ Component,Fragment} from 'react'
import { Layout, Menu, Breadcrumb, Icon,Input,Button,List } from 'antd';


import AdminHeader from 'common/header'

import axios from 'axios'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { 
    BrowserRouter as Router,
    // HashRouter as Router,
    Route, 
    Link,
    Switch,
    Redirect
} from "react-router-dom";
//调用this必须用constructor
class AdminSider extends Component {
    
 //生命周期函数
    render(){
        return (
               <div className = 'AdminSider'>
                      <Sider width={220} style={{ background: '#fff',height:580 }}>
                            <Menu
                              mode="inline"
                              defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                              style={{ height: '100%', borderRight: 0 }}
                            >
                              <SubMenu
                                key="sub1"
                                title={
                                  <span>
                                    <Icon type="align-left" />
                                    控制台
                                  </span>
                                }
                              >
                                <Menu.Item key="1">
                                <Link to= '/'><Icon type="home" theme="twoTone"/>首页</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                <Link to= '/user'><Icon type="user" />用户列表</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                <Link to= '/category'><Icon type="menu" />分类管理</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                <Link to= '/product'><Icon type="shopping" />商品管理</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                <Link to= '/ad'><Icon type="fire" />广告管理</Link>
                                </Menu.Item>
                                
                              </SubMenu>
                              
                            </Menu>
                      </Sider>
               </div>
            )
        }
}





export default AdminSider