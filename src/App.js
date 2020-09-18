import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import './App.css';
import HomeContainer from './container/HomeContainer';

class App extends Component
{
    state = {
        todos: []
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.setState({ todos: res.data }));
    }

    markComplete = (id) =>
    {
        this.setState({
            todos: this.state.todos.map(todo =>
            {
                if (todo.id === id)
                    todo.completed = !todo.completed;
                return todo;
            })
        });
    }

    delTodo = (id) =>
    {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    }

    addTodo = (title) =>
    {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        })
            .then(res => this.setState({
                todos: [...this.state.todos, res.data]
            }));
    }

    render()
    {
        return (
            <Router>
                <div className="App">
                    <Switch><Route exact path="/" component={HomeContainer} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;