import React,{ Component,Fragment} from 'react'
import { Breadcrumb, Table, Button ,Input,InputNumber,Switch,Divider  } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'


import { 
    Link,
} from "react-router-dom";

import moment from 'moment'

import AdminLayout from 'common/layout/index.js'



//调用this必须用constructor
class ProductList extends Component {
  constructor(props){
    super(props)

  }
    componentDidMount(){
    this.props.handlePage(1)
  }
 

 //生命周期函数
    render(){
      const columns = [
            {
              title: '商品名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '是否首页显示',
              dataIndex: 'isShow',
              key: 'isShow',
              render:(isShow,record)=>{
                return(
                    <Switch 
                    checkedChildren="是" 
                    unCheckedChildren="否" 
                    defaultChecked = {isShow == '0' ? false : true}

                    onChange = {(checked)=>{
                        const isShow = checked ? '1' : '0'
                        handleUpdateIsShow(record._id,isShow)
                    }}
                     />
                    
                    
                  )
              }
            },
            {
              title: '是否热卖',
              dataIndex: 'isHot',
              key: 'isHot',
              render:(isHot,record)=>{
                return(
                    <Switch 
                    checkedChildren="是" 
                    unCheckedChildren="否" 
                    defaultChecked = {isHot == '0' ? false : true}

                    onChange = {(checked)=>{
                        const isHot = checked ? '1' : '0'
                        handleUpdateIsHot(record._id,isHot)
                    }}
                     />
                  )
              }
            },
            {
              title: '上架下架',
              dataIndex: 'status',
              key: 'status',
              render:(status,record)=>{
                return(
                    <Switch 
                    checkedChildren="是" 
                    unCheckedChildren="否" 
                    defaultChecked = {status == '0' ? false : true}
                    onChange = {(checked)=>{
                        const status = checked ? '1' : '0'
                        handleUpdateStatus(record._id,status)
                    }}
                     />
                  )
              }
            },
            {
              title:'排序',
              key: 'order',
              dataIndex: 'order',
              render: (order,record) => {
                return <InputNumber 
                style= {{width:50}}
                defaultValue={order}
                onBlur={(ev)=>{
                  if(order != ev.target.value){
                  handleUpdateOrder(record._id,ev.target.value)
                  }
                }}
                
                />
              }
            },
            {
              title:'操作',
              render:(name,record)=>{
                return(
                    <span>
                    {
                    //携带id才能知道是编辑哪个商品
                    }
                    <Link to={'/product/save/'+record._id}>
                      编辑
                   
                    </Link>
                    <Divider type ="vertical" />
                    <Link to={'/product/detail/'+record._id}>
                      详情
                    </Link>
                    </span>
                  )
              }
            }
          ];

          const { 
              list,
              current,
              pageSize,
              total,
              handlePage,
              isFetching,
              handleUpdateStatus,
              handleUpdateOrder,
              handleUpdateIsShow,
              handleUpdateIsHot

             } = this.props;
          const dataSource = list.toJS()
          // console.log(dataSource)
        return (
                <div className = 'ProductList' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                        <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className = 'btn'>
                    <Link to = '/product/save'> 
                      <Button type="primary">新增商品</Button>
                    </Link>
                    </div>
                    <div className='content'>
                        <Table columns={columns}
                        dataSource={dataSource} 
                        loading={isFetching}
                        rowKey="_id"
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
 
      list:state.get('product').get('list'),
      current:state.get('product').get('current'),
      pageSize:state.get('product').get('pageSize'),
      total:state.get('product').get('total'),
      isFetching:state.get('product').get('isFetching'),
  }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
       handlePage:(page)=>{
          dispatch(actionCreators.getPageAction(page))
      },
      
      handleUpdateStatus:(id,newStatus)=>{
          dispatch(actionCreators.getUpdateStatusAction(id,newStatus))
      },
      handleUpdateOrder:(id,newOrder)=>{
          dispatch(actionCreators.getUpdateOrderAction(id,newOrder))
      },
      handleUpdateIsShow:(id,newIsShow)=>{
          dispatch(actionCreators.getUpdateIsShowAction(id,newIsShow))
      },
      handleUpdateIsHot:(id,newIsHot)=>{
          dispatch(actionCreators.getUpdateIsHotAction(id,newIsHot))
      },

    }
}
export default connect( mapStateToProps, mapDispatchToProps)(ProductList)