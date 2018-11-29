import { connect } from 'react-redux';
import LoginScreen from '../components/lgoin';
import { loginAction } from '../actions/LoginAction';

const mapStateToProps = (state) => ({
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    tokenVN: state.loginReducer.tokenVN,
    isLogin: state.loginReducer.isLogin
});

const mapDispatchToProps = (dispatch) => ({
        loginA: (username, password) => dispatch(loginAction(username, password))
    });

const Login = connect(mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

export default Login;