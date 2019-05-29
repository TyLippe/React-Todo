import React from "react";

import "./Todo.css";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Todo() {
    return (
        <div>
            <TodoList />
            <TodoForm />    
        </div>
    );
} 

export default Todo;