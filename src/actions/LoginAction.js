import axios from 'axios';

export const loginAction = (username, password) => (dispatch) => {
    axios.post('https://reqres.in/api/login',
        {
            'email': username,
            'password': password
        })
        .then((response) => {
            console.log("respose",response);
            dispatch({
                type: 'SUCCESS',
                payload: {
                    tokenVN: response.data.token,
                    name: username,
                    pass: password,
                    isLogin: true
                }
            })
        })
        
        .catch((err) => {
            console.log(err)

        })
}