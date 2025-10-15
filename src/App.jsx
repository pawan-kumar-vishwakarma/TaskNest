import React from 'react'
import Progresstracker from './components/Progresstracker'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'

export default function App() {
  return (
    <div>
      <h1>Task Buddy</h1>
      <p>Your friendly Task Manager</p>
      <Progresstracker />
      <Taskform />
      <Tasklist />
      <button>Clear all Tasks</button>
    </div>
  )
}