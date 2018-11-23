
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