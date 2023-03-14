import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [showAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer);

    }
    getTasks();
  }, [])


  //fetch Tasks

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }

  //fetch task

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data;
  }


  ///Add A Task

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 1000) + 1;

    // const newTask = {id , ...task}
    // setTasks([...tasks , newTask])

  }

  /// delete Task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }


  /// toggle Task
  const toggleReminder = async (id) => {

    const taskToggle = await fetchTask(id)
    const updatTask = { ...taskToggle, reminder: !taskToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task))
  }


  return ( 
  <div className="container ">
    <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? <Tasks tasks={tasks}
      onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}
    <Footer />
  </div>
  )
}

export default App;
