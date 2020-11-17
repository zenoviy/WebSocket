export function checkUserLogin(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                text: "success",
                isLogined: true
            })
        }, 3000)
    })
}