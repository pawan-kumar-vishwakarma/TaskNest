import { useEffect, useState } from 'react';
import Progresstracker from './components/Progresstracker'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task)=> {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    settasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) =>  i != index));
  }

  return (
    <div>
      <h1>Task Buddy</h1>
      <p>Your friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}