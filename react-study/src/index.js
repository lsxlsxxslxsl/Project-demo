import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import AppRouter from './AppRouter';

ReactDOM.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <TodoListNew />
  //   </Provider>
  // </React.StrictMode>,

  <AppRouter />,
  document.getElementById('root')
);
