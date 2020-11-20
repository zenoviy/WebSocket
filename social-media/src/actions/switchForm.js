import { formActions } from '../constants/actionsName';

export function switchForm(dispatch, formState){
    dispatch({ type: formActions['SWITCH_FORM'], payload: formState})
} 