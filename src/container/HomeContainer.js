import { ReactComponent } from '*.svg';
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

    addTodo: (title) =>
        {

    const newState = this.state.todos.push(title)
    this.setState({ todos: newState })
}

delTodo: (title) =>
{

    const newState = this.state.todos.delTodo(title)
    this.setState({ todos: newState })

}

render()
{
    return <HomeScreen addTodo={this.addTodo
    } />

}

export default HomeContainer;
