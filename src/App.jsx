import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TodoList} />
        <Route path="/add" component={AddTaskForm} />
        <Route path="/edit/:taskId" component={EditTaskForm} />
      </Switch>
    </Router>
  );
}

export default App;
