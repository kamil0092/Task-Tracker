import React from 'react'
import Task from './Task'

const Tasks = ({tasks , onDelete , onToggle}) => {
  return ( <>
       {tasks.map((task , index) => (
        <Task 
        key={index} 
        task = {task} 
        deleteTask={onDelete} 
        onToggle={onToggle}
        />
       ))}
  </>
  
  )
}

export default Tasks