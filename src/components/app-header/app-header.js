import React from "react";

import './app-header.css';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="todo_head">
            <h1 className="todo_head__title">My todo list</h1>
            <span
                className="todo_head__descrip"
            >
                { toDo } more to do, {done} done
            </span>
        </div>
);
};

export default AppHeader;
