

import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import Todo from "../src/assets/direct-hit.png"
import Doing from "../src/assets/fire.png"
import Done from "../src/assets/glowing-star.png"
import { useEffect, useState } from "react";

const oldTaks = localStorage.getItem("tasks")


const App = () => {
  const [tasks, setTasks]=useState(JSON.parse(oldTaks)||[])
  useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(tasks))},[tasks])
  const handleDelete = (taskIndex) =>{
    const newTasks = tasks.filter((task,index)=>index!==taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className="app">
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <TaskColumn title="Todo" icon={Todo} tasks={tasks} status="todo"  handleDelete={handleDelete}/>
        <TaskColumn title="Doing" icon={Doing} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn title="Done" icon={Done} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;
