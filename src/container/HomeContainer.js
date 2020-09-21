import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen';

class HomeContainer extends Component
{
    constructor(props)
    {
        super()
        this.state = {
            todos: []
        }
    }

    addTodo = (title) =>
    {

        const newState = this.state.todos.push(title)
        this.setState({ todos: newState })
    }

    delTodo = (title) =>
    {

        const newState = this.state.todos.delTodo(title)
        this.setState({ todos: newState })

    }

    markComplete = (title) =>
    {
        const newState = this.state.todos.markComplete(title)
        this.setState({ todos: newState })
    }

    render()
    {
        return <HomeScreen todo={this.state.todos} addTodo={this.addTodo
        } delTodo={this.delTodo} markComplete={this.markComplete} />

    }

}

export default HomeContainer;
