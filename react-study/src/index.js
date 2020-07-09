import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import TodoList from './components/TodoList';
import TodoListNew from './components/TodoListNew';
import store from './store-react-redux';
// import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListNew />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
