import React, {Component} from "react";

import './todo-list-item.css';
import ButtonItem from "../todo-list-item-button/todo-list-item-button";

export default class TodoListItem extends Component {

    render() {
        let classNames = 'todo_item';

        const {
            label,
            deleteItem,
            onToggleImportant,
            onToggleDone,
            important,
            done
             } = this.props;

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <div className = {classNames}>
                <div
                    onClick={ onToggleDone }
                    className= 'todo_item__text'
                >
                    { label }
                </div>
                <div className="todo_item__buttons_wrap">
                    <ButtonItem
                        label= '#trash'
                        clickBtn={ deleteItem }
                    />
                    <ButtonItem
                        label= '#excalmation'
                        clickBtn= { onToggleImportant }
                    />
                </div>
            </div>
        );
    }
};
