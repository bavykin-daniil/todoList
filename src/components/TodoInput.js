import React from 'react';

export default function TodoInput({todoTitle, setTodoTitle, addTodo}) {
  return (
          <div
          className = "todoInputContainer"
          data-aos="fade-up"
          data-aos-delay = "100">
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