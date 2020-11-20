import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/loginActions';
import { formValidationText } from '../helpers/validators';
import { formDataToObject } from '../helpers/transformData';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.initLoginAction = this.initLoginAction.bind(this);
        this.getLoginInputData = this.getLoginInputData.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);

        this.loginForm = null;

        this.state = {
            userEmail: '',
            userPassword: '',
            formErrors: {userEmail: '', userPassword: ''},
            validatioMessage: null
        }
    }
    initLoginAction(){  
        this.formOperations(this.loginForm)
    }
    getLoginInputData(target){
        let validationInfo = formValidationText(target)
        this.seveValidationInfo(validationInfo)
        
        if(!validationInfo.validField) return 
        let name = target.name;
        let value = target.value;

        this.setState({
            [name] : value
        })
    }
    seveValidationInfo(infoObject){
        let targetName = Object.keys(infoObject)[0];
        let errorMessage = infoObject[targetName];

        let formErrors = Object.assign( this.state.formErrors );
        formErrors[targetName] = errorMessage
        this.setState({
            formErrors, 
        })
    }
    displayValidatorMessage(){
        let formErrors = this.state.formErrors;
        let validatioMessage = this.state.validatioMessage;

        validatioMessage = Object.entries(formErrors).map((name, i) => {
            return(
                <p key={i}>{ formErrors[name[0]] }</p>
            )
        })
        this.setState({
            validatioMessage
        })
        
    }
    onSubmitForm(event){
        event.preventDefault();
        let formResult = this.formOperations(event.target);
        if(formResult.formValid){
            this.props.setLogin(formResult.formObject)
        }
    }
    formOperations(target){
        let finalObject = formDataToObject.call(this, target, this.getLoginInputData);
        this.displayValidatorMessage()
        
        return finalObject
    }
    render(){
        const validatorMessage = this.state.validatioMessage;
        return(
            <div>
                <h1>Login</h1>
                <div >{ validatorMessage ? validatorMessage : '' }</div>
                <form onSubmit={e => this.onSubmitForm(e)} ref={form => this.loginForm = form}>
                    <input type="email" name="userEmail" placeholder="enter you email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <input type="password" name="userPassword" placeholder="enter you password" minLength="5" maxLength="30" required />
                    <button onClick={this.initLoginAction}>Login</button>
                </form>    
            </div>
        )
    }
}


export default connect(state => ({
    loginCheck: state.loginCheck
}), dispatch => ({
        setLogin: (formObject) => {
            const loginData = () => { 
                return setLogin(formObject)
            }
            dispatch(loginData())
        }
    })
)(Login)
