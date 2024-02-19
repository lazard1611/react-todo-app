import React, { Component } from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="todo_form"
            onSubmit={ this.onSubmitForm }
            >
                <input
                    type= "text"
                    className="todo_form__input"
                    onChange={this.onLabelChange}
                    placeholder= "What needs to be done"
                    value={this.state.label}
                />
                <button className="todo_form__btn">
                    add item
                </button>
            </form>
        )
    }
}
