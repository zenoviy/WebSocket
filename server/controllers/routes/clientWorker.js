/*   Business */

//  register post  
// login get
// logout
// check



module.exports.registerNewUser = (req, res) => {
    console.log("user was registered")

    let userResponse = JSON.stringify({
        statusText: "user was registered", 
        responseStatus: true, 
        attachedData: {token: new Date().getTime()}
    })
    
    res.set('Access-Control-Allow-Origin', '*')
    res.send(userResponse)
}
