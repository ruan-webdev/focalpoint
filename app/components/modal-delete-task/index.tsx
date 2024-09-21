import styles from "../../styles/addTaskModal.module.scss"
import Button from "../button"

interface RemoveTaskModalProps {
  task?: { title: string; completed: boolean }
  onDelete: () => void
  onClose: () => void
}

const RemoveTaskModal = ({ onDelete, onClose }: RemoveTaskModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2 style={{ marginBottom: "30px" }}>Deletar tarefa</h2>
          <p style={{ marginBottom: "30px" }}>
            Tem certeza que você deseja deletar esta tarefa?
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
    </div>
  )
}

export default RemoveTaskModal
