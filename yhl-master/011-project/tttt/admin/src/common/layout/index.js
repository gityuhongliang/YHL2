import React,{ Component,Fragment} from 'react'
import { Layout, Menu, Breadcrumb, Icon,Input,Button,List } from 'antd';

import AdminHeader from 'common/header'
import AdminSider from 'common/sider'


import axios from 'axios'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
//调用this必须用constructor
class AdminLayout extends Component {
    
 //生命周期函数
    render(){
        return (
               <div className = 'AdminLayout'>
                    <Layout>
                        <AdminHeader />
                        <Layout>
                        <AdminSider />
                        <Layout style={{ padding: '0 24px 24px' }}>
                            
                            <Content
                              style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                              }}
                            >
                              {this.props.children}
                            </Content>
                          </Layout>
                        </Layout>
                    </Layout>
               </div>
            )
        }
}





export default AdminLayout