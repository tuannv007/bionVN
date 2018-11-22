import { createStore, combineReducers, applyMiddleware } from 'redux';
import numberReducer from '../reducers/CounterReducer';

const AppReducers = combineReducers({
  numberReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
}
let store = createStore(rootReducer);

export default store;