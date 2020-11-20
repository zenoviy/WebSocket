export function formDataToObject(form, callbackInField){
    let formObject = {};
    let formValid = false;
    for(let formItem of form){
        if(formItem.name){
            formObject[formItem.name] = formItem.value;
            if(callbackInField) callbackInField.call(this, formItem)
            if(!formItem.validity.valid){
                return { status: formItem.validity.valid, formObject}
            }
            formValid = formItem.validity.valid;
        }
    }
    return {
        formValid,
        formObject
    }
}