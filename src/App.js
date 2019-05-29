import React from 'react';
import Todo from "./components/TodoComponents/Todo";

import "./style.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="title">
        <h2>Ty's Todo List!</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
