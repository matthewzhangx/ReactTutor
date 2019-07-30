import { createStore, applyMiddleware } from 'redux'; //这个Store我是从redux里面拿出来的
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger'
import simpleReducer from '../redux/reducers/simpleReducer';

export default function configureStore(initialState={simpleReducer: {reduxName: '我是一个Redux', reduxTest: '我是为了测试...'}}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(logger)
 );
}
 
