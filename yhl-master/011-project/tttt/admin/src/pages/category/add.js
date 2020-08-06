import React,{ Component,Fragment} from 'react'
import { Breadcrumb, Form, Select, Input, Button  } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'


import moment from 'moment'

import AdminLayout from 'common/layout/index.js'


const { Option } = Select;

//调用this必须用constructor
class CategoryAdd extends Component {
  constructor(props){
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
   componentDidMount(){
    // this.props.handlePage(1)
    // 加载最新父级分类
    this.props.handleLevelCategories()
  }
    handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.handleAddCategories(values)
      }
    });
  };
 //生命周期函数
    render(){
       const { getFieldDecorator } = this.props.form;
       const { categories } = this.props
        return (
                <div className = 'CategoryAdd' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                        <Breadcrumb.Item>新增分类</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='content'>
                     <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
                        <Form.Item label="父级分类">
                              {getFieldDecorator('pid', {
                                rules: [{ required: true, message: '请选择父级分类' }],
                              })(
                                <Select
                                  placeholder="父级分类"
                                  onChange={this.handleSelectChange}
                                >
                                  <Option value="0">根分类</Option>
                                  {
                                      categories.map((category)=>{
                                      return <Option key={category.get('_id')} value={category.get('_id')}>{category.get('name')}</Option>
                                    })
                                  }
                                </Select>,
                              )}
                            </Form.Item>
                        <Form.Item label="分类名称">
                          {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请选择分类名称' }],
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="三级分类">
                          {getFieldDecorator('mobileName', {
                            rules: [{ required: true, message: '请选择三级分类名称' }],
                          })(<Input />)}
                        </Form.Item>
                        
                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                          <Button 
                          type="primary" 
                          onClick={this.handleSubmit}
                          >
                            提交
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                   </AdminLayout>
                </div>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
       categories:state.get('category').get('categories')
  }
}


const WrappedCategoryAdd = Form.create({ name: 'coordinated' })(CategoryAdd);
//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
      handleAddCategories:(values)=>{
        dispatch(actionCreators.getAddCategoriesAction(values))
      },
      handleLevelCategories:()=>{
        dispatch(actionCreators.getLevelCategoriesAction())
      }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(WrappedCategoryAdd)