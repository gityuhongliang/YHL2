import React,{ Component,Fragment} from 'react'
import { Breadcrumb, Table, Button  } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'


import { 
    Link,
} from "react-router-dom";

import moment from 'moment'

import AdminLayout from 'common/layout/index.js'



//调用this必须用constructor
class Categorylist extends Component {
    componentDidMount(){
    this.props.handlePage(1)
  }
 

 //生命周期函数
    render(){
      const columns = [
            {
              title: '分类名称',
              dataIndex: 'name',
              key: 'name',
              render: name => <a>{name}</a>,
            },
            {
              title: '三级分类名称',
              dataIndex: 'mobileName',
              key: 'mobileName',
            },
            {
              title: '是否显示',
              dataIndex: 'isShow',
              key: 'isShow',
            },
            {
              title:'排序',
              key: 'order',
              dataIndex: 'order',
            }
          ];

          const { list,current,pageSize,total,handlePage,isFetching } = this.props;
          const dataSource = list.toJS()
          // console.log(dataSource)
        return (
                <div className = 'Categorylist' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                        <Breadcrumb.Item>分类列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className = 'btn'>
                    <Link to = '/category/add'> 
                      <Button type="primary">新增分类</Button>
                    </Link>
                    </div>
                    <div className='content'>
                        <Table columns={columns}
                        dataSource={dataSource} 
                        loading={isFetching}
                        pagination ={{
                          total:total,
                          pageSize:pageSize,
                          current:current,
                        }}
                        onChange={(page)=>{
                          handlePage(page.current)
                        }}
                        />
                    </div>
                   </AdminLayout>
                </div>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
 
      list:state.get('category').get('list'),
      current:state.get('category').get('current'),
      pageSize:state.get('category').get('pageSize'),
      total:state.get('category').get('total'),
      isFetching:state.get('category').get('isFetching'),
  }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
       handlePage:(page)=>{
          dispatch(actionCreators.getPageAction(page))
      }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(Categorylist)