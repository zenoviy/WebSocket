import React, { useContext, createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux'
import { setLogin } from '../actions/loginActions'

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

function useAuth() {
    return useContext(authContext);
}



function PrivateRoute({ children, ...rest }) {
    
    const proviedeAut = useProvideAuth();
    console.log(proviedeAut.userData.isLogined)
    return (
      <Route
        {...rest}
        render={({ location }) =>
        proviedeAut.userData.isLogined ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/welcome"
              }}
            />
          )
        }
      />
    );
}

/*
<PrivateRoute exact path="/"  >
                            <Home />
                        </PrivateRoute>
*/

function Navigation(props){
    const loginCheck = props.loginCheck;
    const proviedeAut = useProvideAuth();
    /*useEffect(() => { proviedeAut.setUser({
        isLogined: loginCheck.isLogined
    })}, [])*/
   // console.log(proviedeAut.userData, loginCheck.isLogined, "asd")
     return(
        <div>
            <ProvideAuth >
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
                            <Registration />
                        </Route>
                    </Switch>
                </Router>
            </ProvideAuth>
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