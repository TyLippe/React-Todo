import React from "react";

class TodoList extends React.Component {
    render(){
        return (
        <div className="list">
            <h1>{this.props.taskProp.task}</h1>
        </div>
        );
    };
};

export default TodoList;