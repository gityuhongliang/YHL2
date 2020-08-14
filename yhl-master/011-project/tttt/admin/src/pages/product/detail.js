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
class ProductDetail extends Component {
    constructor(props){
        super(props)
        //把由哪个商品编辑进入id的值存下来
        this.state ={
            productId:this.props.match.params.productId
        }
    }
    componentDidMount(){
    // this.props.handlePage(1)
    //获取商品详情信息
        if (this.state.productId) {
            this.props.handleProductDetail(this.state.productId)
        }

    }
    
 //生命周期函数
    render(){
        const { getFieldDecorator } = this.props.form;
        const { 

            categoryName,
            name,
            description,
            price,
            stock,
            mainImage,
            images,
            detail,

            } = this.props
          //处理商品图片回传
        let imagesList = [];
        if(images){
            imagesList = images.split(',').map((url,index)=>{
                return <li key={index}><img src={url} /></li>
            })
        }
        return (

                <div className = 'ProductDetail' >
                    <AdminLayout >
                        <Breadcrumb style={{ margin: '16px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                            <Breadcrumb.Item>商品详情</Breadcrumb.Item>
                           
                           
                        </Breadcrumb>
                        <div className='content'>
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
                                <Form.Item label="商品分类">
                                    <Input  
                                    value={categoryName}
                                    disabled={true}
                                     />
                                </Form.Item>
                                <Form.Item label="商品名称">
                                    <Input
                                    value={name}
                                    disabled={true}
                                     />
                                </Form.Item>
                                <Form.Item label="商品描述">
                                    <Input
                                    value={description}
                                    disabled={true}
                                     />
                                </Form.Item>
                                <Form.Item label="商品价格">
                                   <InputNumber 
                                    min={0}
                                    style= {{width:80}}
                                    value={price}
                                    disabled={true}
                                    />
                                </Form.Item>
                                <Form.Item label="商品库存">
                                    <InputNumber 
                                    min={0}
                                    style= {{width:80}}
                                    value={stock}
                                    disabled={true}
                                    />
                                </Form.Item>
                                <Form.Item label="商品封面">
                                   {
                                    mainImage ? <ul className="imageBox"><li><img src={mainImage} /></li></ul> : null
                                    }
                                </Form.Item>
                                <Form.Item label="商品图片">
                                  <ul className="imageBox">{imagesList ? imagesList : null}</ul>
                                </Form.Item>
                                <Form.Item label="商品详情">
                                    <div dangerouslySetInnerHTML={{__html: detail}} />
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
       
        //获取商品详情
        categoryName:state.get('product').get('categoryName'),
        name:state.get('product').get('name'),
        description:state.get('product').get('description'),
        price:state.get('product').get('price'),
        stock:state.get('product').get('stock'),
        mainImage:state.get('product').get('mainImage'),
        images:state.get('product').get('images'),
        detail:state.get('product').get('detail'),
    }
}


const WrappedProductDetail = Form.create({ name: 'coordinated' })(ProductDetail);
//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
    return {
        
        handleProductDetail:(id)=>{
            dispatch(actionCreators.getProductDetailAction(id))
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(WrappedProductDetail)