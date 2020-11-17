import { checkUserLogin } from '../api/serverRequests';

export function setLogin(dispatch){
    return dispatch => {
        checkUserLogin()
        .then(resolve => { 
            dispatch({ type: 'LOGINED', payload: {} })
            console.log(resolve)
            //window.location.href = "/"

        })
    }
}