import React, { useState, useEffect, useReducer } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import todoReducer from './reducers/todoReducer';

export default function App() {

  const [todoTitle, setTodoTitle] = useState('');

  const localData = localStorage.getItem('todos');
  const getLocalData = localData ? JSON.parse(localData) : []
  
  const [state, dispatch] = useReducer(todoReducer, getLocalData)

  useEffect(() => localStorage.setItem('todos', JSON.stringify(state)))

  const addTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: todoTitle
    })
    setTodoTitle('');
  };

  return (
    <div className = "todoListContainer">
      <TodoInput
                todoTitle = {todoTitle}
                setTodoTitle = {setTodoTitle}
                addTodo = {addTodo}/>
      <div className = "todoLists">
        <div className = "todoList">
          <div className = "top todo">
            <strong> Todo </strong>
          </div>

          <div className = "bottom">
            <ul>
              {state.map(todoItem => {
                if (todoItem.column === "todo") {
                  return <TodoItem
                      dispatch = {dispatch}
                      todoItem = {todoItem}
                      key = {todoItem.id} />
                }
                return null
              })}
            </ul>
          </div>
        </div>

        <div className = "todoList">
          <div className = "top inProgress">
            <strong> In progress </strong>
          </div>

          <div className = "bottom">
            <ul>
              {state.map(todoItem => {
                if (todoItem.column === "inProgress") {
                  return <TodoItem
                      dispatch = {dispatch}
                      todoItem = {todoItem}
                      key = {todoItem.id} />
                }
                return null
              })}
            </ul>
          </div>
        </div>

        <div className = "todoList">
          <div className = "top coded">
            <strong> Coded </strong>
          </div>

          <div className = "bottom">
            <ul>
              {state.map(todoItem => {
                if (todoItem.column === "coded") {
                  return <TodoItem
                      dispatch = {dispatch}
                      todoItem = {todoItem}
                      key = {todoItem.id} />
                }
                return null
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
