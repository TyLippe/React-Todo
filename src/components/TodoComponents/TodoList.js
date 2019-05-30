import React from "react";

const TodoList = props => {
        console.log(props)
        return (

        <div
        className={`task${props.taskProp.complete ? 'complete' : ''}`}
        onClick={() => props.toggleComplete(props.taskProp.id)}
        >

        {console.log(props.taskProp)}
            <p>{props.taskProp.task}</p>
        </div>
        );
};

export default TodoList;