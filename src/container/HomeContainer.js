import { ReactComponent } from '*.svg';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

class HomeContainer extends ReactComponent
{
    state = {
        todos: []
    }

    addTodo: (title) => {

        const newState = this.state.todos.push(title)
        this.setState({ todos: newState })

render()
{
    return <HomeScreen addTodo={this.addTodo} />

}

export default HomeContainer
