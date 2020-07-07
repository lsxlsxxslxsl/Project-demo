import 'antd/dist/antd.css';
import React, { Component } from 'react';
import store from '../store';
import {
  addTodoAction,
  changeInputAction,
  deleteTodoAction,
  getMyListAction
} from '../store/action';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.storeChange = this.storeChange.bind(this); // 转变this指向
    store.subscribe(this.storeChange); // 订阅Redux的
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        addTodo={this.addTodo}
        deleteTodo={this.deleteTodo}
      />
    );
  }

  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action);
  }

  changeInputValue(e) {
    store.dispatch(changeInputAction(e.target.value));
  }

  addTodo() {
    store.dispatch(addTodoAction());
  }

  deleteTodo(index) {
    store.dispatch(deleteTodoAction(index));
  }

  storeChange() {
    this.setState(store.getState());
  }
}
export default TodoList;
