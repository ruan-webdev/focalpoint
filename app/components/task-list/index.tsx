"use client"

import { useState, useEffect } from "react"
import TaskItem from "../task-item"
import AddTaskModal from "../modal-add-task"
import styles from "../../styles/TaskList.module.scss"

interface Task {
  title: string
  completed: boolean
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    setTasks(savedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title: string) => {
    setTasks([...tasks, { title, completed: false }])
  }

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskList}>
        <h3>Suas tarefas de hoje</h3>
        <div className={styles.tasks}>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onToggle={() => toggleTask(index)}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <AddTaskModal onAddTask={addTask} onClose={() => setShowModal(false)} />
      )}

      <button className={styles.addTaskBtn} onClick={() => setShowModal(true)}>
        Adicionar nova tarefa
      </button>
    </div>
  )
}

export default TaskList
