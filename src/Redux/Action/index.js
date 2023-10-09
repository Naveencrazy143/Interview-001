// actions.js
import { INCREMENT, DECREMENT ,CONTRACT_DATA,KANBAN_DATA} from '../ActionType';

export const increment = (response) => (
  {
  type: INCREMENT,
  payload:response
});

export const decrement = (response) => ({
  type: DECREMENT,
  payload:response
});

export const contractData = (response) => (
  console.log(response,"rrrrrrrr"),

  {

  type: CONTRACT_DATA,
  payload:response
});
export const kanbvanData = (response) => ({
  type: KANBAN_DATA,
  payload:response

});

