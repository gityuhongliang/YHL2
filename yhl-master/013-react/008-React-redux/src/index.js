import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import store from './store/index.js'

import App from './app.js'

ReactDom.render(

	<Provider store={store}>
    	<App />
  	</Provider>,
  document.getElementById('root')

)


//虚拟DOM

// function fn(){
// 	return(
// 		<div>
// 			<h1> 北京时间 </h1>
// 			<p>{ new Date().toLocaleString() }</p>
// 		</div>
// 	)
// }
// function timer(){
// 	ReactDom.render(
// 		fn(),
//   		document.getElementById('root')

// 	)
// }
// setInterval(timer,1000)

