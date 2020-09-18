import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component
{
    state = {
        title: ''
    }

    // onSubmit = (e) =>
    // {
    //     e.preventDefault();
    //     this.props.addTodo(this.state.title);
    //     this.setState({ title: '' });
    // }
    onChange = (e) => this.setState({ title: e.target.value });

    render()
    {
        return (
            <form onSubmit={() => this.props.onSubmit(this.state.title)} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '10px 15px', fontSize: '15px', border: '1px solid #C0C0C0', outline: 'none', fontWeight: '500', maxWidth: '75%' }}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange} />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }} />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;