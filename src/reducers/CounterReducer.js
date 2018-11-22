const numberReducer = (state = { number: 1 }, action) => {

    switch(action.type) {
      case 'ADD_NUMBER':
        return { ...state,number : state.number + action.payload.key}
  
      case 'SUB_NUMBER':
        return { ...state,number : state.number - 1 }

        case 'LOGIN_SUCCESS':
        return {...state, number : state.number + action.payload.key}
    }
  
    return state;
  }
  
  export default numberReducer;