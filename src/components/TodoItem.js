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
            <button onClick = {() => {
                dispatch({
                    type: 'TODO',
                    payload: todoItem.id
                })
            }}>
                Todo
            </button>
            <button onClick = {() => {
                dispatch({
                    type: 'IN_PROGRESS',
                    payload: todoItem.id
                })
            }}>
                In progress
            </button>
            <button onClick = {() => {
                dispatch({
                    type: 'CODED',
                    payload: todoItem.id
                })
            }}>
                Coded
            </button>
        </li>
    )
}