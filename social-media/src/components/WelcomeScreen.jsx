import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/loginActions';
import { BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
    useHistory
} from 'react-router-dom';


import Login from './Login';
import Registration from './Registration';

function Rediclaration(props){
    let history = useHistory()
    return(<Rediclaration props={props} />)
}

class WelcomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.changeLocation = this.changeLocation.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }
    changeLocation(){
        window.location.href = "/welcome/login";
    }
    loginUser(){
        //console.log(1)
        this.props.setLogin()
    }
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
                <button onClick={ this.changeLocation }>Click</button>
                <button onClick={ this.loginUser }>Login</button>
                { this.props.loginCheck.isLogined ? <Redirect to='/' />: ""}
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
)(WelcomeScreen)
