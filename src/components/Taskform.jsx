import React, { useState } from "react";

export default function Taskform() {
    const [task, setTask]= useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    return (
        <form>
            <div className="task-form">
                <input type="text" placeholder="Enter the task"
                onChange={(e) => setTask(e.target.value)}/>
                <span><button type="submit">Add Task</button></span>
            </div>
            
            <div className="btns">
                <select onChange={(e)=> setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select onChange={(e)=> setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
                <h1>{task} {priority} {category}</h1>
        </form>
    )
}