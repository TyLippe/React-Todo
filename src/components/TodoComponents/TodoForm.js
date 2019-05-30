import React from "react";
import ReactSearchBox from "react-search-box";

import TodoList from "./TodoList";
// import { isTemplateElement } from "@babel/types";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskArray: [],
            task: "",
            id: Date.now(),
            complete: false
        };
    };

    addTask = event => {
        event.preventDefault();
        const newTask = {
            task: this.state.task,
            id: Date.now(),
            complete: false
        };
        this.setState({
            taskArray: [...this.state.taskArray, newTask],
            task: "",
            id: Date.now(),
            complete: false
        });
    };
    
    handleChanges = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    toggleComplete =  id => {
        this.setState({taskArray: this.state.taskArray.map(object => {
            if (object.id === id) {
                return {
                    ...object,
                    complete: !object.complete
                }
            }
            else {
                return object
        }
        })
        })
    };

    removeComplete = event => {
        event.preventDefault();
        this.setState({taskArray: this.state.taskArray.filter(object => object.complete === false)}
    )}

    searchTask = event => {
        event.preventDefault();
        this.setState({taskArray: this.state.taskArray.filter(object => object.task === this.state.task)}
        )}

    clearAll = event => {
        event.preventDefault();
        this.setState({taskArray: this.state.taskArray.filter(object => this.state.task)}
        )}

    render(){
        console.log(this.state.task);
    return (
        <>
        <div className="search">
        <form>
            {/* <ReactSearchBox
            placeholder="Search"
            value=""
            data={this.state.task}
            callback={record => console.log(record)} /> */}
                <input placeholder="Search" 
                onChange={this.searchTask} />
            </form>
        </div>

        <div className="form">
        <form >
            <input placeholder="What Now?"
            onChange={this.handleChanges}
            value= {this.state.task} 
            name = "task"
            />
        
        <button type="submit" 
        onClick={this.addTask}>Add Task</button>
        
        <button 
        onClick={this.removeComplete}>Remove Completed</button>

        <button 
        onClick={this.clearAll}>Clear All</button>
        </form>
        </div>

        <div>
        {this.state.taskArray.map((taskMap, index) =>(
            <TodoList taskProp={taskMap} key={index} toggleComplete={this.toggleComplete} id={taskMap.id} />
        ))}
        </div>
        </>
    );
};
};

export default TodoForm;