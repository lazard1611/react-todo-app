import React from 'react';

import './todo-list-item-button.css';


const ButtonItem = ({label, clickBtn}) => {
    return (
        <div className="todo_item__button_wrap">
            <svg display="none" xmlns="http://www.w3.org/2000/svg" >
                <symbol id="trash" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </symbol>

                <symbol id="excalmation" viewBox="0 0 128 512">
                    <path fill="currentColor" d="M72 64c0-17.7-14.3-32-32-32S8 46.3 8 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM40 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </symbol>
            </svg>
            <button
                className="todo_item__button"
                onClick={ clickBtn }
            >
                <svg className="icon">
                    <use xlinkHref={label}></use>
                </svg>
            </button>
        </div>
    );
};

export default ButtonItem;
