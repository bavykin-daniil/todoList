import React from 'react';

export default function TodoSearch({search, setSearch}) {
    return (
        <div className = "search">
                <input
                placeholder = "Search"
                value = {search}
                onChange = {
                    (event) => {
                        setSearch(event.target.value)
                    }
                }/>
            </div>
    )
}