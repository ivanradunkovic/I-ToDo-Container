import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component
{
    getStyle = () =>
    {
        return {
            background: '#FFFFFF',
            padding: '5px',
            borderBottom: '1px #2F4F4F solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render()
    {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={completed ? 'checked' : ''} />{' '}
                    {title}
                    <button className="del" onClick={this.props.delTodo.bind(this, id)}>Delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem;