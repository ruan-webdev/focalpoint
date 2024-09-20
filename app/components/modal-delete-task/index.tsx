/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "../../styles/AddTaskModal.module.scss"
import Button from "../button"

interface RemoveTaskModalProps {
  task?: { title: string; completed: boolean }
  onDelete: () => void
  onClose: () => void
}

const RemoveTaskModal = ({ task, onDelete, onClose }: RemoveTaskModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2 style={{ marginBottom: "30px" }}>Deletar tarefa</h2>
        <p style={{ marginBottom: "30px" }}>
          Tem certeza que deseja deletar esta tarefa?
        </p>

        <div className={styles.actions}>
          <Button
            label="Cancelar"
            size="large"
            variant="secondary"
            onClick={onClose}
          />
          <Button
            label="Deletar"
            size="large"
            variant="danger"
            onClick={() => {
              onDelete() // Chama a função de deletar
              onClose() // Fecha o modal
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default RemoveTaskModal
