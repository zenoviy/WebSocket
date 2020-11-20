import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/loginActions';
import { switchForm } from '../actions/switchForm';
import { NavLink, Redirect, } from 'react-router-dom';


import Login from './Login';
import Registration from './Registration';



class WelcomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.switchToLogin = this.switchToLogin.bind(this);
        this.switchToRegistration = this.switchToRegistration.bind(this);
        this.state = {
            selectAuthOption: "LOGIN"
        }
    }
    switchToLogin(){
        this.setState({
            selectAuthOption: "LOGIN"
        })
        this.props.switchForm("LOGIN")
    }
    switchToRegistration(){
        this.setState({
            selectAuthOption: "REGISTRATION"
        })
        this.props.switchForm("REGISTRATION")
    }
    componentDidMount(){
        this.setState({
            selectAuthOption: this.props.globalState.currentInitForm
        })
    }
    render(){
        let selectAuthOption = this.state.selectAuthOption;
        return(
            <div>
                <h1>Welcome</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
                
                <button onClick={ this.switchToLogin }>To Login</button>
                <button onClick={ this.switchToRegistration }>To Registration</button>
                { selectAuthOption === "LOGIN" ? <Login /> : <Registration /> }
                { this.props.loginCheck.isLogined ? <Redirect to='/' />: ""}
            </div>
        )
    }
}


export default connect(state => ({
    loginCheck: state.loginCheck,
    globalState: state.globalState
}), dispatch => ({
        setLogin: () => {
            const loginData = () => { 
                return setLogin(dispatch)
            }
            dispatch(loginData())
        },
        switchForm: (formState) => {
            switchForm(dispatch, formState)
        }
    })
)(WelcomeScreen)
