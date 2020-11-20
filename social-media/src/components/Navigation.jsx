import React, { createContext, useState } from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { setLogin } from '../actions/loginActions';

import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration';
import WelcomeScreen from '../components/WelcomeScreen';


const authContext = createContext();

function ProvideAuth({ children, props }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    )
}

function useProvideAuth() {
    const [userData, setUser] = useState({
        isLogined: false
    });
    return {
        userData,
        setUser
    }
}

function Navigation(props){
    const loginCheck = props.loginCheck;
    console.log(loginCheck)
     return(
        <div>
            
                <Router>
                    <Switch>
                        <Route exact path="/"  >
                            {loginCheck.isLogined ? <Home /> : <Redirect to="/welcome" />}
                        </Route>

                        <Route exact path="/welcome">
                            <WelcomeScreen />
                        </Route>
                        <Route exact path="/welcome/login">
                            <Login />
                        </Route>
                        <Route exact path="/welcome/registration">
                            <WelcomeScreen />
                        </Route>
                        <Router path="*">
                            <Redirect to="/welcome" />
                        </Router>
                    </Switch>
                </Router>

        </div>
    )
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
)(Navigation)