import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
    return (
        <div className="todo">
        <TodoList />
        <TodoForm />
        </div>
    );
};

export default Todo;

