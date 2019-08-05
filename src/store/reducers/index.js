import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer'
import bitcoinReducer from './bitcoinReducer'
import userReducer from './userReducer'



const combinedReducer = combineReducers({
    contactsReducer,
    bitcoinReducer,
    userReducer,
  })
  
  export default combinedReducer
  