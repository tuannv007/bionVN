const loginReducer = (state = { username: 'yanama', password: '' }, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action);
            //return {...state,username :  action.name.username,password : action.pass.password}
            return {...state, username : action.payload.name, password : action.payload.pass}
    }

    return state;
}

export default loginReducer;