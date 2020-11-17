const TIMEOUT = 1000;
export function checkUserLogin(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                text: "success",
                isLogined: true
            })
        }, TIMEOUT)
    })
}

export function registrationNewUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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