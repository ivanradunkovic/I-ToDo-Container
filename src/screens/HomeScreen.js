import { ReactComponent } from '*.svg';
import React from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import Header from '../layout/Header';

class HomeScreen extends ReactComponent
{

    render()
    {
        return (<div className="container">
            <Header />
            <br />
            <React.Fragment>
                <AddTodo addTodo={this.props.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>

        </div>
        )
    }
}

export default HomeScreen
