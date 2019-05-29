import React from "react";

import Task from "./TodoList"

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    };

    addTask = event => {
        event.preventDefault();
        const newTask = {
            task: this.state.task
        };
        this.setState({
            data: [...this.state.data, newTask]
        });
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    render() {
        return (
            <>
            <div>
                {this.state.data.map(taskMapped => (
                    <Task taskProps={taskMapped} />
                ))}
            </div>

            <div>
            <form>
                <input placeholder="What now?!"
                onChange={this.handleChanges}
                value={this.state.task}
                name="task" />
            </form>
            <button onClick={this.addTask}>Add Task</button>
            <button>Clear Completed</button>
            </div>
            </>
        );
    };
};

export default TodoForm;