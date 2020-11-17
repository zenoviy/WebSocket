import React from 'react';
import { connect } from 'react-redux'
import { setLogin } from '../actions/loginActions'


class Registration extends React.Component {
    constructor(props){
        super(props)
        this.isLogined = props.loginCheck.isLogined;
    }
    render(){
        console.log( this.isLogined, "Reg")
        return(
            <div>
                <h1>Registration</h1>
            </div>
        )
    }
}


export default connect(state => ({
    loginCheck: state.loginCheck
}), ( dispatch ) => ({
    setLogin
}))(Registration)
