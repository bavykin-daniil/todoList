import React from 'react';
// import TodoSearch from './TodoSearch';

export default function TodoList(props) {
    return (
        <div
        className = "todoList"
        data-aos-delay = {props.delay}
        data-aos = {props.animation}>
            <div className = {`top ${props.type}`}>
                <strong> Todo </strong>
            </div>
            {props.children}
        </div>
    )
}