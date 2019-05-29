import React from "react"

class Task extends React.Component {
    render() {
        return (
            <div className="tasks">
                <p>{this.props.taskProps}</p>
            </div>
        );
    }
}

export default Task;