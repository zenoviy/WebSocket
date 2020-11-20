
import { formActions } from '../constants/actionsName';

const initialState = {
    currentInitForm: "LOGIN"
}
export default function globalState(state = initialState, action){ 
    if(action.type === formActions['SWITCH_FORM']){
        return {
            ...state,
            currentInitForm : action
        }
    }
    return state
}