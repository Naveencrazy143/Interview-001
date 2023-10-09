// reducer.js
import { INCREMENT, DECREMENT,KANBAN_DATA,CONTRACT_DATA } from '../ActionType';

const initialState = {
  count: 0,
  message:undefined,
  contractDetails:undefined,
  taskDetails:undefined,
};

const  AuthReducer= (state = initialState, action) => {
  console.log(state,"action.type======>")
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        message: action.payload,
      };
      case CONTRACT_DATA:
        return {
          ...state,
          contractDetails: action.payload,
        };
        case KANBAN_DATA:
          return {
            ...state,
            taskDetails: action.payload,
          };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default AuthReducer;