import React from 'react';
import { connect } from 'react-redux'
import { setLogin } from '../actions/loginActions'


class Login extends React.Component {
    render(){
        return(
            <div>
                <h1>Login</h1>
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
