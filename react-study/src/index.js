import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './components/TodoList';
// import TodoListNew from './components/TodoListNew';
import CompRouter from './components/CompRouter';
// import './index.css';

ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <TodoListNew />
  //   </Provider>
  // </React.StrictMode>,

  <CompRouter />,
  document.getElementById('root')
);
