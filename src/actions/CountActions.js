import numberReducer from '../reducers/CounterReducer';
import Counter from '../components/counter';
import { connect } from 'react-redux';
export const addNumber = (value) => {
    return {
        type: 'ADD_NUMBER',
        payload: {
            key : value
        }
    }
}
export const subNumber = () => {
    return {
        type: 'SUB_NUMBER',
        payload: {

        }
    }
}

export const showDialog = (value) => {
    return {
        type :'LOGIN_SUCCESS',
        payload :{
            key : value
        }
    }
}