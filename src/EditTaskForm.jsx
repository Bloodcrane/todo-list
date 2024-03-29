import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'https://crudapi.co.uk';
const API_KEY = 'BvYs3CkMMI0UR-D-RI-_x8SJ7cFzbvnfclU4P989MnmudT4RyQ';

function EditTaskForm() {
  const [taskName, setTaskName] = useState('');
  const { taskId } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchTask();
  }, );

  const fetchTask = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks/${taskId}?apiKey=${API_KEY}`);
      setTaskName(response.data.name);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/tasks/${taskId}`, { name: taskName, apiKey: API_KEY });
      history.push('/');
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={handleInputChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
      <Link to="/">Back to Todo List</Link>
    </div>
  );
}

export default EditTaskForm;