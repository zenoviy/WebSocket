export function formValidationText(input){
    if(!input || !input.type) return
    let nameOfInput = input.name;
    let typeOfInput = input.type;
    let valueOfInput = input.value;
    let errorMessage = '';
    let validField = false;
    switch(typeOfInput){
        case 'email':
            let regEx = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            validField = valueOfInput.match(regEx) ? true : false;
            errorMessage = !valueOfInput ? "No email" :  
            !validField ? "Invalid Email field" : '';
            break;
        case 'password':
            validField = valueOfInput.length < 5 || valueOfInput.length > 30 || !valueOfInput.length ? false : true;
            errorMessage = !valueOfInput ? "No password" : 
            valueOfInput.length < 5 ? "Too short password" : 
            valueOfInput.length > 30 ? "Too long password" : '' ;
            break;
        default :
            validField = valueOfInput.length < 3 || valueOfInput.length || !valueOfInput.length > 30 ? false : true;
            errorMessage = !valueOfInput.length ? "No name" : 
            valueOfInput.length < 3 ? "Too short name" : 
            valueOfInput.length > 30 ? "Too long name" : '' ;
            break;
    }

    return {
        [nameOfInput] : errorMessage,
        validField
    }
    
}