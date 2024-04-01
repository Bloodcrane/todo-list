import React, { useState } from 'react';

function TodoList({ language }) {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTodoList([...todoList, newTask]);
      setNewTask('');
    }
  };

  const moveToInProgress = (index) => {
    const task = todoList[index];
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
    setInProgressList([...inProgressList, task]);
  };

  const moveToToDo = (index) => {
    const task = inProgressList[index];
    const updatedInProgressList = inProgressList.filter((_, i) => i !== index);
    setInProgressList(updatedInProgressList);
    setTodoList([...todoList, task]);
  };

  const completeTask = (index) => {
    const task = inProgressList[index];
    const updatedInProgressList = inProgressList.filter((_, i) => i !== index);
    setInProgressList(updatedInProgressList);
    setCompletedList([...completedList, task]);
  };

  return (
    <div className="App">
      <div className="columnTodo">
        <h2>{language === 'en' ? 'To-Do' : 'შესასრულებელი'}</h2>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder={language === 'en' ? 'Add new task' : 'ახალი დავალების დამატება'}
        />
        <button onClick={addTask}>{language === 'en' ? 'Add Task' : 'დაამატე დავალება'}</button>
        <ul>
          {todoList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => moveToInProgress(index)}>
                {language === 'en' ? 'Move to In Progress' : 'გადაიტანე პროგრესში'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="columnInprogress">
        <h2>{language === 'en' ? 'In Progress' : 'პროგრესშია'}</h2>
        <ul>
          {inProgressList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => moveToToDo(index)}>
                {language === 'en' ? 'Move to To-Do' : 'დააბრუნე დავალებაში'}
              </button>
              <button onClick={() => completeTask(index)}>
                {language === 'en' ? 'Complete' : 'შესრულება'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="columnCompleted">
        <h2>{language === 'en' ? 'Completed' : 'დასრულებულია'}</h2>
        <ul>
          {completedList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
