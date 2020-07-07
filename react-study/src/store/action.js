import axios from 'axios';
import { ADD_TODO, CHANGE_INPUT, DELETE_TODO, GET_LIST } from './actionTypes';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
});

export const addTodoAction = () => ({
  type: ADD_TODO
});

export const deleteTodoAction = (index) => ({
  type: DELETE_TODO,
  index
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data
});

export const getTodoList = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList'
    );
    // console.log(data);
    const action = getListAction(data);
    dispatch(action);
  };
};
