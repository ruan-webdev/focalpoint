"use client"

import { useState, useEffect } from "react"
import TaskItem from "../task-item"
import AddTaskModal from "../modal-add-task"
import styles from "../../styles/TaskList.module.scss"
import RemoveTaskModal from "../modal-delete-task"

const TaskList = () => {
  const [tasks, setTasks] = useState<{ title: string; completed: boolean }[]>(
    []
  )

  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState<{
    title: string
    completed: boolean
  } | null>(null)

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])

  const addTask = (title: string) => {
    setTasks([...tasks, { title, completed: false }])
  }

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(newTasks)
  }

  const deleteTask = (index: number) => {
    setTaskToDelete(tasks[index]) // Define a tarefa a ser deletada
    setShowDeleteModal(true) // Abre o modal
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskList}>
        <h3>Suas tarefas de hoje</h3>
        <div className={styles.tasks}>
          {tasks
            .filter((task) => !task.completed) // Apenas tarefas não completadas
            .map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                onToggle={() => toggleTask(index)}
                onDelete={() => deleteTask(index)}
              />
            ))}
        </div>

        {tasks.some((task) => task.completed) && (
          <div className={styles.completedTasks}>
            <h3>Tarefas finalizadas</h3>
            <div className={styles.tasks}>
              {tasks
                .filter((task) => task.completed)
                .map((task, index) => (
                  <TaskItem
                    key={index}
                    task={task}
                    onToggle={() => toggleTask(index)}
                    onDelete={() => deleteTask(index)}
                  />
                ))}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <AddTaskModal onAddTask={addTask} onClose={() => setShowModal(false)} />
      )}

      {showDeleteModal &&
        taskToDelete && ( // Verifique se taskToDelete não é null
          <RemoveTaskModal
            task={taskToDelete}
            onDelete={() => {
              const updatedTasks = tasks.filter(
                (_, i) => i !== tasks.indexOf(taskToDelete)
              )
              setTasks(updatedTasks)
            }}
            onClose={() => {
              setShowDeleteModal(false)
              setTaskToDelete(null)
            }}
          />
        )}

      <button className={styles.addTaskBtn} onClick={() => setShowModal(true)}>
        Adicionar nova tarefa
      </button>
    </div>
  )
}

export default TaskList
