import React,{ Component,Fragment} from 'react'

import { connect } from 'react-redux' 

import { 
   
    Route, 
    Link,
    Switch
} from "react-router-dom";

import './index.css'
import AdvertSave from './save.js'
import AdvertList from './list.js'
import AdvertDetail from './detail.js'



//调用this必须用constructor
class Advert extends Component {
  
 //生命周期函数
    render(){
      
        return (
                <div className = 'Advert' >
                <Switch>
                  <Route  path="/Advert/save/:AdvertId?" component={AdvertSave} />
                  <Route  path="/Advert/detail/:AdvertId?" component={AdvertDetail} />
                  <Route  path="/Advert" component={AdvertList} />
                  
                </Switch>

                </div>
            )
        }
}




export default Advert