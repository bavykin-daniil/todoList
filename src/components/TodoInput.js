import React from 'react';

export default function TodoInput({todoTitle, setTodoTitle, addTodo}) {
    return (
      <div className = "todoInputContainer">
            <input
                  value = {todoTitle}
                  onChange = {(event) => setTodoTitle(event.target.value)}
                  placeholder = "Enter todo title"/>
            <button onClick = {addTodo}>
                Add new
            </button>
      </div>  
    );
};