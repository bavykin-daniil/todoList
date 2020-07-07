import React, { useState, useEffect, useReducer } from 'react';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import todoReducer from './reducers/todoReducer';
import Alert from './components/Alert';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

export default function App() {

  const [todoTitle, setTodoTitle] = useState('');
  const [todoSearch, setTodoSearch] = useState('');
  const [inProgressSearch, setInProgressSearch] = useState('');
  const [codedSearch, setCodedSearch] = useState('');
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
          <TodoList
          type = "todo"
          delay = "200"
          animation = "fade-up">
            <TodoSearch 
            search = {todoSearch}
            setSearch = {setTodoSearch}/>

            <TransitionGroup component = "ul">
              {state.map(todoItem => {
                let searchResult = todoItem.title.indexOf(todoSearch);
                
                if (!todoSearch || (todoSearch && searchResult >= 0)) {
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
                }
                return null
              })}
            </TransitionGroup>
          </TodoList>

          <TodoList
          type = "inProgress"
          delay = "300"
          animation = "fade-up">
            <TodoSearch 
            search = {inProgressSearch}
            setSearch = {setInProgressSearch}/>
            
            <TransitionGroup component = "ul">
              {state.map(todoItem => {
                let searchResult = todoItem.title.indexOf(inProgressSearch);
                
                if (!inProgressSearch || (inProgressSearch && searchResult >= 0)) {
                  if (todoItem.column === "inProgress") {
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
                }
                return null
              })}
            </TransitionGroup>
          </TodoList>

          <TodoList
          type = "coded"
          delay = "400"
          animation = "fade-up">
            <TodoSearch 
            search = {codedSearch}
            setSearch = {setCodedSearch}/>

            <TransitionGroup component = "ul">
              {state.map(todoItem => {
                let searchResult = todoItem.title.indexOf(codedSearch);
                
                if (!codedSearch || (codedSearch && searchResult >= 0)) {
                  if (todoItem.column === "coded") {
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
                }
                return null
              })}
            </TransitionGroup>
          </TodoList>
      </div>
    </div>
  );
};
