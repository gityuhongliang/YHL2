import { createStore,applyMiddleware } from 'redux'

import thunk from 'redux-thunk'


import reducer from './reducer.js'

import { createLogger } from 'redux-logger'


const middlewares = [];  //定义一个数组把thunk和logger放在一起

middlewares.push(thunk)



//自定义配置logger 
const logger = createLogger({
  // ...options
});


//logger只在开发环境下显示
if (process.env.NODE_ENV === `development`) {

  	middlewares.push(logger);
}

const store =createStore(reducer,applyMiddleware(...middlewares))

export default store