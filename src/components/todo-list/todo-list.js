import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onToggleImportant, onToggleDone, deleteItem}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li className="todo__list_item" key= {id}>
                <TodoListItem
                    {...itemProps}
                    deleteItem = { () => deleteItem(id) }
                    onToggleImportant = {() => onToggleImportant(id) }
                    onToggleDone = {() => onToggleDone(id) }
                />
            </li>
        );
    })
    return (
        <ul className="todo__list">
            { elements }
        </ul>
    );
};

export default TodoList;
