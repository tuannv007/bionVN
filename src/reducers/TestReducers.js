const testReducer = (state = { username: ''}, action) => {
    switch (action.type) {
        case 'TESTACTION':
            //return {...state,username :  action.name.username,password : action.pass.password}
            return {...state, username : action.payload.name}
    }

    return state;
}

export default testReducer;