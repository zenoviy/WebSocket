import { combineReducers } from 'redux';
import loginCheck from './initUser';
import globalState from './appGlobalState';

export default combineReducers({
    loginCheck,
    globalState
})