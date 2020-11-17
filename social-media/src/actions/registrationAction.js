import { registrationNewUser } from '../api/serverRequests';

export function setLogin(dispatch){
    return dispatch => {
        registrationNewUser()
        .then(resolve => { 
            dispatch({ type: 'LOGINED', payload: resolve })
            console.log(resolve)
            //window.location.href = "/"

        })
    }
}