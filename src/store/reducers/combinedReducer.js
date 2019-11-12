import authReducer from './authReducer';
import contentReducer from './contentReducer';
import giveThings from './giveThingsReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const combinedReducer = combineReducers({
    auth: authReducer,
    content: contentReducer,
    gifts: giveThings,
    firebase: firebaseReducer
});

export default combinedReducer;