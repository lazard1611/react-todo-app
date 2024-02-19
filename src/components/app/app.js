import React, { Component } from 'react';

import './app.css';
import AppHeader from '../app-header/app-header';
import ItemAddForm from '../item-add-form/item-add-form';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';

export default class App extends Component {

    minId = 10;

    state = {
        todoData:  [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome app'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.minId++
        }
    }

    onDeleteItem = (id) => {
        this.setState(({todoData}) => {
            const findIndex = todoData.findIndex((el) => el.id === id);

            const newArr = [...todoData.slice(0, findIndex), ...todoData.slice(findIndex + 1)]

            return {
                todoData: newArr
            }
        })
    }

    addItem = (e) => {
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                this.createTodoItem(e)
            ]

            return {
                todoData: newArr
            }
        })
    }

    onToggleProperty(arr, id, propName) {
        const findIndex = arr.findIndex((e) => e.id === id);
        const newItem = {...arr[findIndex], [propName]: !arr[findIndex][propName]}

        return [
            ...arr.slice(0, findIndex),
            newItem,
            ...arr.slice(findIndex + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'done')
            }
        });
    }

    filterItems(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    onSearchChange = (term) => {
        this.setState({ term })
    };

    onFilterChange = (filter) => {
        this.setState({ filter })
    };



    searchItem(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    render () {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filterItems(this.searchItem(todoData, term), filter);
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="base">
                <main className="wrapper">
                    <AppHeader
                        toDo={ todoCount }
                        done={ doneCount }
                    />
                    <ItemAddForm
                        addItem = { this.addItem }
                    />
                    <SearchPanel
                        onSearchChange = {this.onSearchChange}
                        onFilterChange = {this.onFilterChange}
                        filter = {filter}
                    />
                    <TodoList
                        todos = { visibleItems }
                        deleteItem={this.onDeleteItem}
                        onToggleImportant= { this.onToggleImportant }
                        onToggleDone= { this.onToggleDone }
                    />
                </main>
            </div>
        );
    }
};
