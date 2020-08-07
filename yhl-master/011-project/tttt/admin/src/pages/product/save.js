import React,{ Component,Fragment} from 'react'
import { Breadcrumb, Form, Select, Input, Button,InputNumber   } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'


import moment from 'moment'

import AdminLayout from 'common/layout'

import UploadImages from 'common/upload-img'

import RichEditor from 'common/rich-editor'


import { UPLOAD_IMAGES,UPLOAD_DETATL_IMAGES } from 'api/config.js'


const { Option } = Select;

//调用this必须用constructor
class ProductSave extends Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
    // this.props.handlePage(1)
    // 加载最新商品分类
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
                <div className = 'ProductSave' >
                    <AdminLayout >
                        <Breadcrumb style={{ margin: '16px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                            <Breadcrumb.Item>新增商品</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='content'>
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
                                <Form.Item label="商品分类">
                                    {getFieldDecorator('category', {
                                        rules: [{ required: true, message: '请选择商品分类' }],
                                    })(
                                    <Select
                                        placeholder="商品分类"
                                        onChange={this.handleSelectChange}
                                        
                                    >
                                        {
                                            categories.map((category)=>{
                                            return <Option key={category.get('_id')} value={category.get('_id')}>{category.get('name')}</Option>
                                        })
                                      }
                                    </Select>,
                                  )}
                                </Form.Item>
                                <Form.Item label="商品名称">
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: '请添加商品名称' }],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="商品描述">
                                    {getFieldDecorator('description', {
                                        rules: [{ required: true, message: '请添加商品描述' }],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="商品价格">
                                    {getFieldDecorator('price', {
                                        rules: [{ required: true, message: '请添加商品价格' }],
                                    })(<InputNumber style= {{width:80}} />)}
                                </Form.Item>
                                <Form.Item label="商品库存">
                                    {getFieldDecorator('stock', {
                                        rules: [{ required: true, message: '请添加商品库存' }],
                                    })(<InputNumber style= {{width:80}} />)}
                                </Form.Item>
                                <Form.Item label="商品封面">
                                    <UploadImages 
                                    action = {UPLOAD_IMAGES}
                                    max={1}
                                    />
                                </Form.Item>
                                <Form.Item label="商品图片">
                                    <UploadImages 
                                    action = {UPLOAD_IMAGES}
                                    max={3}
                                    />
                                </Form.Item>
                                <Form.Item label="商品详情">
                                    <RichEditor 
                                    url={UPLOAD_DETATL_IMAGES}
                                    />
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
        categories:state.get('product').get('categories')
    }
}


const WrappedProductSave = Form.create({ name: 'coordinated' })(ProductSave);
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
export default connect( mapStateToProps, mapDispatchToProps)(WrappedProductSave)