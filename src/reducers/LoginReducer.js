const loginReducer = (state = { username: 'yanama', password: '', tokenVN: '',isLogin : false}, action) => {
    switch (action.type) {
        case 'SUCCESS':
            console.log("action",action)
            //return {...state,username :  action.name.username,password : action.pass.password}
            return { ...state, username: action.payload.name, password: action.payload.pass, tokenVN: action.payload.tokenVN,isLogin: action.payload.isLogin }
    }

    return state;
}

export default loginReducer;