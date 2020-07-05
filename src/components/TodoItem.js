import React from 'react';

import del from '../icons/delete.svg';
import coded from '../icons/check.svg';
import todo from '../icons/minus.svg';
import inProg from '../icons/more.svg';

export default function TodoItem({todoItem, dispatch}){

    return (
            <li>
            <div className = "data">
                <input value = {todoItem.title} onChange = {(event) => {
                    dispatch({
                        type: 'EDIT_TODO',
                        key: todoItem.id,
                        text: event.target.value
                    })
                }}  />
                <button onClick = {() => {
                        dispatch({
                        type: 'REMOVE_TODO',
                        payload: todoItem.id
                        })
                    }}>
                    <img src = {del} alt = "delete"/>
                </button>
            </div>
            
            <div className = "columnBtns">
                <button className = "todo" onClick = {() => {
                    dispatch({
                        type: 'TODO',
                        payload: todoItem.id
                    })
                }}>
                <img src = {todo} alt = "todo"/> 
                </button>

                <button className = "prog" onClick = {() => {
                    dispatch({
                        type: 'IN_PROGRESS',
                        payload: todoItem.id
                    })
                }}>
                    <img src = {inProg} alt = "inProg"/>
                </button>

                <button className = "coded" onClick = {() => {
                    dispatch({
                        type: 'CODED',
                        payload: todoItem.id
                    })
                }}>
                    <img src = {coded} alt = "coded"/>
                </button>
            </div>
        </li>
        )
}