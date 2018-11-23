const sendPointReducer = (state = listData = [], action) => {
    //console.log("send", action);
    
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, listData: action.payload.name }
    }

    return state;
}

export default sendPointReducer;