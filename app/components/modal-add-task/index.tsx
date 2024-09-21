import { useState } from "react"
import styles from "../../styles/AddTaskModal.module.scss"

interface AddTaskModalProps {
  onAddTask: (task: string) => void
  onClose: () => void
}

const AddTaskModal = ({ onAddTask, onClose }: AddTaskModalProps) => {
  const [task, setTask] = useState("")

  const handleAdd = () => {
    if (task) {
      onAddTask(task)
      setTask("")
      onClose()
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2>Nova tarefa</h2>
          <p>Título</p>
          <input
            type="text"
            placeholder="Digite"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className={styles.input}
          />
          <div className={styles.actions}>
            <button onClick={onClose} className={styles.cancelBtn}>
              Cancelar
            </button>
            <button onClick={handleAdd} className={styles.addBtn}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTaskModal
