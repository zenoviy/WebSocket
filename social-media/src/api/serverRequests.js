import {
    MAIN_HOST,
    REGISTER_USER_API,
    /*LOGIN_USER_API,
    CHECK_USER_API*/
} from '../constants/appValue';


const TIMEOUT = 1000;
export function checkUserLogin(loginData){
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            resolve({
                text: "success",
                isLogined: true
            })
        }, TIMEOUT)
    })
}

export function registrationNewUser(registrationData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let url = MAIN_HOST + REGISTER_USER_API;
            console.log(registrationData)
            fetch(url, {
                method: 'POST',
                body: registrationData ? registrationData : null
            }).then(data => {
                return data.json()
            }).then(data => {
                console.log('Server response', data)
            })
            resolve({
                text: "User was registered",
                isLogined: true
            })
        }, TIMEOUT)
    })
}
export function unregisterUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                text: "User was unlogined",
                isLogined: false
            })
        }, TIMEOUT)
    })
}