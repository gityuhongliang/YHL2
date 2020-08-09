import React,{ Component,Fragment} from 'react'
import { Upload, Icon, Modal } from 'antd';



class UploadImages extends Component{
    constructor(props){
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [
              
            ],
          };
          this.handleCancel=this.handleCancel.bind(this)
          this.handleChange=this.handleChange.bind(this)
          this.handlePreview=this.handlePreview.bind(this)
    }
    static getDerivedStateFromProps(props, state){
        //判断fileList大于0个代表传过来有值，只有编辑商品fileList才有值次   判断原来的state是空的才是编辑，因为只有新增才需要上传图片
        if(props.fileList.length > 0 && state.fileList.length == 0){
            return {
                fileList:props.fileList
            }
        }
        return null
    }
    handleCancel(){
        this.setState({ previewVisible: false })
    };

    handlePreview(file){
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    handleChange({ fileList }){ //无论上传还是删除都会触发此事件
        this.setState({ fileList },()=>{
            this.props.getFileList(fileList.map(file=>{
                if(file.response){//有时候属性是unfind所以判断有属性才能拿到
                    return file.response.url
                }
            }).join(','))
        }); 
    }
    render(){
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { action } = this.props
        return (
                <div className="clearfix">
                    <Upload

                    action={action}
                    listType="picture-card"
                    withCredentials={true}

                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                    {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal 
                    visible={previewVisible} 
                    footer={null}
                    onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
            )
    }
}

export default UploadImages