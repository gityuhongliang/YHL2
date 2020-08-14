import React,{ Component,Fragment} from 'react'
import { Breadcrumb, Form, Select, Input, Button,InputNumber   } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'


import moment from 'moment'

import AdminLayout from 'common/layout'

import UploadImages from 'common/upload-image'

import RichEditor from 'common/rich-editor'


import { UPLOAD_IMAGES,UPLOAD_DETATL_IMAGES } from 'api/config.js'


const { Option } = Select;

//调用this必须用constructor
class ProductSave extends Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        //把由哪个商品编辑进入id的值存下来
        this.state ={
            productId:this.props.match.params.productId
        }
    }
    componentDidMount(){
    // this.props.handlePage(1)
    // 加载最新商品分类
        this.props.handleLevelCategories()
    //根据地址后是否有id判断是新增商品还是编辑商品
        if (this.state.productId) {
            this.props.handleProductDetail(this.state.productId)
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            //把编辑商品携带的id存到values上去
            values.id = this.state.productId
            // console.log('Received values of form: ', values);
                this.props.handleSave(err,values)
        
        });
     };
 //生命周期函数
    render(){
        const { getFieldDecorator } = this.props.form;
        const { 
            categories,

            handleMainImages,
            handleImages,
            handleDetail,

            mainImageValidateStatus,
            mainImageHelp,
            imagesValidateStatus,
            imagesHelp,

            category,
            name,
            description,
            price,
            stock,
            mainImage,
            images,
            detail,

            } = this.props
            //处理封面图片回传
        let mainImageList = [];
        if(mainImage){
            mainImageList.push({
                uid: '0',
                name: 'image.png',
                status: 'done',
                url:mainImage,
                response:{
                    url:mainImage
                }
            })
        }
        //处理商品图片回传
        let imagesList = [];
        if(images){
            imagesList = images.split(',').map((url,index)=>{
                return {
                    uid: index,
                    name: 'image.png',
                    status: 'done',
                    url:url,
                    response:{
                        url:url
                    }
                }
            })
        }
        return (
                <div className = 'ProductSave' >
                    <AdminLayout >
                        <Breadcrumb style={{ margin: '16px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                            {
                                this.state.productId ?  <Breadcrumb.Item>编辑商品</Breadcrumb.Item> :  <Breadcrumb.Item>新增商品</Breadcrumb.Item>
                            }
                           
                        </Breadcrumb>
                        <div className='content'>
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
                                <Form.Item label="商品分类">
                                    {getFieldDecorator('category', {
                                        rules: [{ required: true, message: '请选择商品分类' }],
                                        initialValue:category
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
                                        initialValue:name
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="商品描述">
                                    {getFieldDecorator('description', {
                                        rules: [{ required: true, message: '请添加商品描述' }],
                                        initialValue:description
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="商品价格">
                                    {getFieldDecorator('price', {
                                        rules: [{ required: true, message: '请添加商品价格' }],
                                        initialValue:price
                                    })(<InputNumber min={0} style= {{width:80}} />)}
                                </Form.Item>
                                <Form.Item label="商品库存">
                                    {getFieldDecorator('stock', {
                                        rules: [{ required: true, message: '请添加商品库存' }],
                                        initialValue:stock
                                    })(<InputNumber min={0} style= {{width:80}} />)}
                                </Form.Item>
                                <Form.Item 
                                    label="商品封面"
                                    required={true}
                                    validateStatus={mainImageValidateStatus}
                                    help={mainImageHelp}
                                >
                                    <UploadImages 
                                    action = {UPLOAD_IMAGES}
                                    max={1}
                                    getFileList= {(fileList)=>{
                                        handleMainImages(fileList)
                                    }}
                                    fileList={mainImageList}
                                    />
                                </Form.Item>
                                <Form.Item 
                                    label="商品图片"
                                    required={true}
                                    validateStatus={imagesValidateStatus}
                                    help={imagesHelp}
                                >
                                    <UploadImages 
                                    action = {UPLOAD_IMAGES}
                                    max={8}
                                    getFileList= {(fileList)=>{
                                        handleImages(fileList)
                                    }}
                                    fileList={imagesList}
                                    />
                                </Form.Item>
                                <Form.Item label="商品详情">
                                    <RichEditor 
                                    url={UPLOAD_DETATL_IMAGES}
                                    getValues= {(values)=>{
                                        handleDetail(values)
                                    }}
                                    values ={ detail }
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
        categories:state.get('product').get('categories'),


        mainImageValidateStatus:state.get('product').get('mainImageValidateStatus'),
        mainImageHelp:state.get('product').get('mainImageHelp'),
        imagesValidateStatus:state.get('product').get('imagesValidateStatus'),
        imagesHelp:state.get('product').get('imagesHelp'),


        //获取商品详情
        category:state.get('product').get('category'),
        name:state.get('product').get('name'),
        description:state.get('product').get('description'),
        price:state.get('product').get('price'),
        stock:state.get('product').get('stock'),
        mainImage:state.get('product').get('mainImage'),
        images:state.get('product').get('images'),
        detail:state.get('product').get('detail'),
    }
}


const WrappedProductSave = Form.create({ name: 'coordinated' })(ProductSave);
//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
    return {
        handleSave:(err,values)=>{
            dispatch(actionCreators.getSaveProductAction(err,values))
        },
        handleLevelCategories:()=>{
            dispatch(actionCreators.getLevelCategoriesAction())
        },
        handleMainImages:(mainImage)=>{
            dispatch(actionCreators.getMainImagesAction(mainImage))
        },
        handleImages:(images)=>{
            dispatch(actionCreators.getImagesAction(images))
        },
        handleDetail:(values)=>{
            dispatch(actionCreators.getDetailAction(values))
        },
        handleProductDetail:(id)=>{
            dispatch(actionCreators.getProductDetailAction(id))
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(WrappedProductSave)