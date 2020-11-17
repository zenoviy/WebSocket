import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/loginActions';


class Registration extends React.Component {
    constructor(props){
        super(props)
        this.isLogined = props.loginCheck.isLogined;
        this.registrateNewUser = this.registrateNewUser.bind(this);
    }
    registrateNewUser(){
        this.props.setLogin()
    }
    render(){
        console.log( this.isLogined, "Reg")
        return(
            <div>
                <h1>Registration</h1>
                <button onClick={this.registrateNewUser}>Registration</button>
            </div>
        )
    }
}


export default connect(state => ({
    loginCheck: state.loginCheck
}), ( dispatch ) => ({
    setLogin: () => {
        const loginData = () => { 
            return setLogin(dispatch)
        }
        dispatch(loginData())
    }
}))(Registration)
