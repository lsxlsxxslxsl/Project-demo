import { Button, Input, List } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  let { inputValue, inputChange, addTodo, deleteTodo, list } = props;
  return (
    <div>
      <div>
        <Input
          placeholder="请输入内容"
          style={{ width: '250px', marginRight: '10px' }}
          onChange={inputChange}
          value={inputValue}
        />
        <Button type="primary" onClick={addTodo}>
          增加
        </Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                deleteTodo(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      };
      dispatch(action);
    },
    addTodo() {
      let action = { type: 'add_todo' };
      dispatch(action);
    },
    deleteTodo(index) {
      let action = {
        type: 'delete_todo',
        index
      };
      dispatch(action);
    }
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
