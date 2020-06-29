import React from 'react';
import del from '../icons/alertDelete.svg';
import alr from '../icons/alert.svg';

export default function Alert({hideAlert}) {
    return (
        <div className = "alertContainer">
            <div className = "alert">
                <div className = "imgContainer">
                    <img src = {alr} alt = "alert" />
                </div>
                <div className = "data">
                    <strong>
                        Warning !
                    </strong>
                    <p>
                        Please, fill the filed
                    </p>
                </div>
                <button onClick = {hideAlert}>
                    <img src = {del} alt = "del" />
                </button>
            </div>
        </div>
    )
}