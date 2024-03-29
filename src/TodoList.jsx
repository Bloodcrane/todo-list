import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'https://crudapi.co.uk';
const API_KEY = 'BvYs3CkMMI0UR-D-RI-_x8SJ7cFzbvnfclU4P989MnmudT4RyQ';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks?apiKey=${API_KEY}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${taskId}?apiKey=${API_KEY}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const markAsCompleted = async (taskId) => {
    try {
      await axios.put(`${API_BASE_URL}/tasks/${taskId}`, { isCompleted: true, apiKey: API_KEY });
      fetchTasks();
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            {!task.isCompleted && (
              <>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => markAsCompleted(task.id)}>Mark as Completed</button>
                <Link to={`/edit/${task.id}`}>Edit</Link>
              </>
            )}
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Task</Link>
    </div>
  );
}

export default TodoList;