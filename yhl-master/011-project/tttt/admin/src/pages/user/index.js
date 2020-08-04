import React,{ Component,Fragment} from 'react'
import { Breadcrumb, Icon,Table, Divider, Tag } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'




import AdminLayout from 'common/layout/index.js'

//调用this必须用constructor
class User extends Component {
    
 //生命周期函数
    render(){
      const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <span>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>Invite {record.name}</a>
                  <Divider type="vertical" />
                  <a>Delete</a>
                </span>
              ),
            },
          ];

          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];

        return (
                <div className = 'User' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>用户列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='content'>
                        <Table columns={columns} dataSource={data} />
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
export default connect( mapStateToProps, mapDispatchToProps)(User)