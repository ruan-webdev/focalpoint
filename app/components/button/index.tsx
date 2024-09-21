import React from "react"
import styles from "../../styles/button.module.scss"

interface ButtonProps {
  label: string
  variant?: "primary" | "secondary" | "danger"
  size?: "medium" | "large"
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
}) => {
  const classNames = `${styles.button} ${styles[`button--${variant}`]} ${
    styles[`button--${size}`]
  }`

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
