import { registrationNewUser } from '../api/serverRequests';
import { formActions } from '../constants/actionsName';

export function setRegistration(formObject){
    return dispatch => {
        registrationNewUser(formObject)
        .then(resolve => { 
            dispatch({ type: formActions['LOGIN'], payload: resolve })
        })
    }
}