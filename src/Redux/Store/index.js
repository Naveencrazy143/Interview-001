import { createStore } from 'redux';
import AuthReducer from '../Reducer'; // Use the appropriate named export here

const store = createStore(AuthReducer); // Use the imported reducer here

export default store;