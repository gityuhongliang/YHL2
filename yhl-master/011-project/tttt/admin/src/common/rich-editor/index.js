import React,{ Component,Fragment} from 'react'

import Simditor from 'simditor';

import $ from 'jquery'

import 'simditor/styles/simditor.css'

class RichEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
          isLoaded:false
        }
        this.toolbar = [
              'title',
              'bold',
              'italic',
              'underline',
              'strikethrough',
              'fontScale',
              'color',
              'ol',          
              'ul',            
              'blockquote',
              'code',         
              'table',
              'link',
              'image',
              'hr',            
              'indent',
              'outdent',
              'alignment',
            ]

            //发送请求携带cookie
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
               }
            })
    }
    componentDidMount(){
        this.editor = new Simditor({
          textarea:this.textarea,
          toolbar:this.toolbar,
          upload:{
            url:this.props.url,
            fileKey:'upload'
          }
        });

        this.editor.on('valuechanged',()=>{
          this.props.getValues(this.editor.getValue())
        })
    }
    componentDidUpdate(){
      //判断values有没有值 有的话回填
      //判断state  取反isLoaded为ture没有更新state  
      //如果进来了变为ture就不再进来，不会造成每输入一次就更新一次的问题
    if(this.props.values && !this.state.isLoaded){
      this.editor.setValue(this.props.values)
      this.setState({
        isLoaded:true
      })
    }
  }
    render(){
        return(
            <textarea ref={(textarea)=>{this.textarea = textarea}} id="editor"></textarea>
            )
    }
}


export default RichEditor