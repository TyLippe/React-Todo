import React from "react";

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
            taskData: [...this.state.taskData, newTask]
        });
    };
    
    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        console.log(this.state.task);
    return (
        <div className="form">
        <form>
            <input placeholder="Task"
            onChange={this.handleChanges}
            value= {this.state.task} 
            name = "task"
            />
        </form>
        <button onClick={this.addTask}>Add Task</button>
        <button>Remove Completed</button>
        </div>
    );
};
};

export default TodoForm;