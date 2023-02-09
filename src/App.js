import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask  from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(  [
    {id: 1, text: "Doctors appointment", day :"Feb 5 2:30 p.m", reminder:true},
    {id: 2, text: "Food Shopping", day :"Feb 5 3:30 p.m", reminder:true},
    {id: 3, text: "School", day :"Feb 5", reminder:true}
])
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder =(id) =>{
  setTasks(
    tasks.map((task) => (task.id === id) ? { ...task, reminder: !task.reminder} : task )
    )
  }

const onTask = (task) => {
  console.log(task);
  const id = tasks.length + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask onAdd = {onTask}/>
      {tasks.length >0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} toggleReminder={toggleReminder}/> : "No Tasks" }
    </div>
  );
}

export default App;
