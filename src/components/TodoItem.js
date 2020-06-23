import React from 'react';

export default function TodoItem({todoItem, dispatch}){

    return (
        <li>
            <strong>{todoItem.id}</strong>
            <p>{todoItem.title}</p>
            <button onClick = {() => {
                    dispatch({
                    type: 'REMOVE_TODO',
                    payload: todoItem.id
                    })
                }}>
                Delete
            </button>
        </li>
    )
}