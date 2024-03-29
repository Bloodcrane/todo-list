
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'https://crudapi.co.uk';
const API_KEY = 'BvYs3CkMMI0UR-D-RI-_x8SJ7cFzbvnfclU4P989MnmudT4RyQ';

function AddTaskForm() {
  const [taskName, setTaskName] = useState('');
  const history = useHistory();

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/tasks`, { name: taskName, isCompleted: false, apiKey: API_KEY });
      history.push('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <Link to="/">Back to Todo List</Link>
    </div>
  );
}

export default AddTaskForm;