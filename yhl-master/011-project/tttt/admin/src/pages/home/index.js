import React,{ Component,Fragment} from 'react'
import { Layout, Menu, Breadcrumb, Icon ,Card, Col, Row,Input,Button,List} from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'




import AdminLayout from 'common/layout/index.js'

//调用this必须用constructor
class home extends Component {
    
 //生命周期函数
    render(){
        return (
                <div className = 'home' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className = 'content' style={{ background: '#ECECEC', padding: '30px' }}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Card title="Card title" bordered={false}>
                            Card content
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card title="Card title" bordered={false}>
                            Card content
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card title="Card title" bordered={false}>
                            Card content
                          </Card>
                        </Col>
                      </Row>
                    </div>
                   </AdminLayout>
                </div>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
 

  }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
       
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(home)