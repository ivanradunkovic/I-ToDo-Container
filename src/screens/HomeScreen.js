import React from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import Header from '../layout/Header';

class HomeScreen extends React.Component
{

    constructor(props)
    {
        super()
        this.state = {
            todos: []
        }
    }


    render()
    {
        return (<div className="container">
            <Header />
            <br />
            <React.Fragment>
                <AddTodo addTodo={this.props.addTodo} />
                <Todos todos={this.props.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
        </div>
        )
    }
}

export default HomeScreen;
