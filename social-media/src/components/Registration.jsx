import React from 'react';
import { connect } from 'react-redux';
import { setRegistration } from '../actions/registrationAction';
import { formValidationText } from '../helpers/validators';
import { formDataToObject } from '../helpers/transformData';


class Registration extends React.Component {
    constructor(props){
        super(props)
        this.initRegistrationAction = this.initRegistrationAction.bind(this);
        
        this.onSubmitForm = this.onSubmitForm.bind(this);

        this.registrationForm = null;

        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            formErrors: { userName: '', userEmail: '', userPassword: ''},
            validatioMessage: null
        }
    }
    initRegistrationAction(){
        this.formOperations(this.registrationForm)
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
            this.props.setRegistration(formResult.formObject)
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
                <h1>Registration</h1>
                <div >{ validatorMessage ? validatorMessage : '' }</div>
                <form onSubmit={e => this.onSubmitForm(e)} ref={form => this.registrationForm = form}>
                    <input type="text" name="userName" placeholder="create you name" required minLength="3" maxLength="30" />
                    <input type="email" name="userEmail" placeholder="enter you email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <input type="password" name="userPassword"  placeholder="create you password" required minLength="5" maxLength="30" />
                    
                    <button onClick={this.initRegistrationAction}>Registration</button>
                </form>
            </div>
        )
    }
}


export default connect(state => ({
    loginCheck: state.loginCheck
}), ( dispatch ) => ({
    setRegistration: (formObject) => {
        const loginData = () => { 
            return setRegistration(formObject)
        }
        dispatch(loginData())
    }
}))(Registration)
