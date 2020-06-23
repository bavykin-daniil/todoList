import React from 'react';

export default function TodoInput({todoTitle, setTodoTitle, addTodo}) {
    return (
      <div>
            <input
                  value = {todoTitle}
                  onChange = {(event) => setTodoTitle(event.target.value)}/>
            <button onClick = {addTodo}>
                Add
            </button>
      </div>  
    );
};