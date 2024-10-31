import { useState } from "react"

import Heading from "./assets/components/heading"
import InputElement from "./assets/components/inputElement"
import Tasklist from "./assets/components/tasklist"

function App() {
  
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    setTasks([...tasks, task]);
  };

  return (<div>
    <Heading/>
    <InputElement newTask = {addTask}/>
    <Tasklist tasks = {tasks}/>
  </div>
  )
}

export default App
