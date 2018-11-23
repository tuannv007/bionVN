import { createStore, combineReducers, applyMiddleware } from 'redux';
import numberReducer from '../reducers/CounterReducer';
import loginReducer from '../reducers/LoginReducer';
import SendPointReducer from '../reducers/SendPointReducer'
import thunk from 'redux-thunk';
import testReducer from '../reducers/TestReducers';

const AppReducers = combineReducers({
  numberReducer,loginReducer,SendPointReducer,testReducer
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;