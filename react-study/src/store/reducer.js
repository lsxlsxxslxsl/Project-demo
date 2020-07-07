import { ADD_TODO, CHANGE_INPUT, DELETE_TODO, GET_LIST } from './actionTypes';

const defaultState = {
  inputValue: 'Write Something',
  list: ['早上4点起床，锻炼身体', '中午下班游泳一小时']
};
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue); //push新的内容到列表中去
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1); //push新的内容到列表中去
    return newState;
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.list;
    return newState;
  }
  return state;
};
