"use client"

import { useState, useEffect } from "react"
import TaskItem from "../task-item"
import AddTaskModal from "../modal-add-task"
import styles from "../../styles/taskList.module.scss"
import RemoveTaskModal from "../modal-delete-task"

interface Task {
  id: number
  title: string
  completed: boolean
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null)

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
    setTasks([...tasks, { id: Date.now(), title, completed: false }]) // Usando Date.now() para gerar um ID único
  }

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const deleteTask = (id: number) => {
    setTaskToDelete(tasks.find((task) => task.id === id) || null) // Definindo a tarefa a ser deletada
    setShowDeleteModal(true) // Abre o modal
  }

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id) // Filtra pela id
    setTasks(updatedTasks) // Atualiza o estado com as tarefas restantes
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)) // Atualiza o localStorage
    setShowDeleteModal(false)
    setTaskToDelete(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.taskList}>
        <h3>Suas tarefas de hoje</h3>
        <div className={styles.tasks}>
          {tasks
            .filter((task) => !task.completed) // Apenas tarefas não completadas
            .map((task) => (
              <TaskItem
                key={task.id} // Usando o ID como chave
                task={task}
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
        </div>

        {tasks.some((task) => task.completed) && (
          <div className={styles.completedTasks}>
            <h3>Tarefas finalizadas</h3>
            <div className={styles.tasks}>
              {tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => toggleTask(task.id)}
                    onDelete={() => deleteTask(task.id)}
                  />
                ))}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <AddTaskModal onAddTask={addTask} onClose={() => setShowModal(false)} />
      )}

      {showDeleteModal && taskToDelete && (
        <RemoveTaskModal
          task={taskToDelete}
          onDelete={() => handleDeleteTask(taskToDelete.id)}
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
