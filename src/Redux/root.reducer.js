import {combineReducers} from 'redux';

import User_Reducer from './User/user.reducer';

export default combineReducers({
    user:User_Reducer
})
