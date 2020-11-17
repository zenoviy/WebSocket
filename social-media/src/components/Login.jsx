import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/loginActions';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.initLoginAction = this.initLoginAction.bind(this);
    }
    initLoginAction(){
        this.props.setLogin()
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <button onClick={this.initLoginAction}>Login</button>
            </div>
        )
    }
}


export default connect(state => ({
    loginCheck: state.loginCheck
}), dispatch => ({
        setLogin: () => {
            const loginData = () => { 
                return setLogin(dispatch)
            }
            dispatch(loginData())
        }
    })
)(Login)
