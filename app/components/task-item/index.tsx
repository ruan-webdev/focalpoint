import styles from "../../styles/taskItem.module.scss"
import { FiTrash } from "react-icons/fi"

interface TaskItemProps {
  task: { title: string; completed: boolean }
  onDelete: () => void
  onToggle: () => void
}

const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  return (
    <div
      className={`${styles.taskItem} ${task.completed ? styles.completed : ""}`}
    >
      {/* Checkbox para marcar a tarefa como completa */}
      <input type="checkbox" checked={task.completed} onChange={onToggle} />

      {/* Título da tarefa */}
      <span>{task.title}</span>

      {/* Botão para deletar a tarefa */}
      <button onClick={onDelete} className={styles.deleteBtn}>
        <FiTrash size={20} style={{ color: "#B0BBD1" }} />
      </button>
    </div>
  )
}

export default TaskItem
