import { connect } from 'react-redux';
import Test from '../components/test';
import { testAction } from '../actions/TestAction'; 

const mapStateToProps = (state) => ({
    username : state.testReducer.username
});

const mapDispatchToProps = (dispatch) => ({
    user: (username) => dispatch(testAction(username))
});
const Tests = connect(mapStateToProps,
    mapDispatchToProps
)(Test);

export default Tests;