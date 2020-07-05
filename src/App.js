import React, { useState, useEffect, useReducer } from 'react';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import todoReducer from './reducers/todoReducer';
import Alert from './components/Alert';

export default function App() {

  const [todoTitle, setTodoTitle] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const localData = localStorage.getItem('todos');
  const getLocalData = localData ? JSON.parse(localData) : []
  
  const [state, dispatch] = useReducer(todoReducer, getLocalData)

  useEffect(() => localStorage.setItem('todos', JSON.stringify(state)))

  const addTodo = () => {
    if (todoTitle.trim()) {
      dispatch({
        type: 'ADD_TODO',
        payload: todoTitle
      })
      setTodoTitle('')
      setShowAlert(false)
    } else {
      setTodoTitle('')
      setShowAlert(true)
    }
  };

  const hideAlert = () => {
    setShowAlert(false)
  }

  AOS.init()

  return (
    <div className = "todoListContainer">
      <CSSTransition
      in = {showAlert}
      timeout = {500}
      classNames = "alert"
      unmountOnExit>
        <Alert hideAlert = {hideAlert}/>
      </CSSTransition>

      <TodoInput
                todoTitle = {todoTitle}
                setTodoTitle = {setTodoTitle}
                addTodo = {addTodo}/>

      <div className = "todoLists">
          <div
          className = "todoList"
          data-aos="fade-up"
          data-aos-delay = "200">
            <div className = "top todo">
              <strong> Todo </strong>
            </div>
                <TransitionGroup component = "ul">
                  {state.map(todoItem => {
                  if (todoItem.column === "todo") {
                   return <CSSTransition
                   key = {todoItem.id}
                   timeout={500}
                   classNames="item">
                    <TodoItem
                          dispatch = {dispatch}
                          todoItem = {todoItem}/>
                    </CSSTransition>
                  }
                  return null
                })}
                </TransitionGroup>
          </div>

          <div
          className = "todoList"
          data-aos="fade-up"
          data-aos-delay = "300">
            <div className = "top inProgress">
              <strong> In progress </strong>
            </div>

            <div className = "bottom">
              <TransitionGroup component = "ul">
                  {state.map(todoItem => {
                  if (todoItem.column === "inProgress") {
                   return <CSSTransition key = {todoItem.id} timeout={500}
                   classNames="item">
                    <TodoItem
                          dispatch = {dispatch}
                          todoItem = {todoItem}/>
                    </CSSTransition>
                  }
                  return null
                })}
                </TransitionGroup>
            </div>
          </div>

          <div
          className = "todoList"
          data-aos="fade-up"
          data-aos-delay = "400">
            <div className = "top coded">
              <strong> Coded </strong>
            </div>

            <div className = "bottom">
              <TransitionGroup component = "ul">
                  {state.map(todoItem => {
                  if (todoItem.column === "coded") {
                   return <CSSTransition key = {todoItem.id} timeout={500}
                   classNames="item">
                    <TodoItem
                          dispatch = {dispatch}
                          todoItem = {todoItem}/>
                    </CSSTransition>
                  }
                  return null
                })}
                </TransitionGroup>
            </div>
          </div>
      </div>
    </div>
  );
};
