import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { getListAction } from './action';
import { GET_MY_LIST } from './actionTypes';

//generator函数
function* mySaga() {
  //等待捕获action
  yield takeEvery(GET_MY_LIST, getList);
}

async function getList() {
  const { data } = await axios.get(
    'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList'
  );
  const action = getListAction(data);
  await put(action);
}

export default mySaga;
