import React from "react";

function TodoList (props) {
        return (
        <div className="list">
            {console.log(props.taskProp)}
            <p>{props.taskProp.task}</p>
        </div>
        );
};

export default TodoList;