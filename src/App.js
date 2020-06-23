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
    <div>
      <TodoInput
                todoTitle = {todoTitle}
                setTodoTitle = {setTodoTitle}
                addTodo = {addTodo}/>
      <ul>
        {state.map(todoItem => <TodoItem
                                dispatch = {dispatch}
                                todoItem = {todoItem}
                                key = {todoItem.id}  />)}
      </ul>
    </div>
  );
};
