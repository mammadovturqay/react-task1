import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h1>Tapşırıq Siyahısı</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Yeni tapşırıq daxil edin"
      />
      <button onClick={addTask}>Əlavə et</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
