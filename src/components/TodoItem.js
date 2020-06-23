import React from 'react';

export default function TodoItem({todoItem}) {
    return (
        <li>
            <strong>{todoItem.id}</strong>
            <p>{todoItem.title}</p>
        </li>
    )
}