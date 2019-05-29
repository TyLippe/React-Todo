import React from "react";
import TodoList from "./TodoList";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskArray: [],
            task: "",
            toDoId: Date.now(),
            taskCompleted: false
        };
    };

    addTask = event => {
        event.preventDefault();
        const newTask = {
            task: this.state.task,
            toDoId: Date.now(),
            taskCompleted: false
        };
        this.setState({
            taskArray: [...this.state.taskArray, newTask],
            task: "",
            toDoId: Date.now(),
            taskCompleted: false
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
        <>
        <div>
        {this.state.taskArray.map(taskMap =>(
            <TodoList taskProp={this.state.taskArray} key={this.state.toDoId} />
        ))}
        </div>

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
        </>
    );
};
};

export default TodoForm;