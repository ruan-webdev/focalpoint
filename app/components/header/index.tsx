import Image from "next/image"
import styles from "../../styles/Header.module.scss"
import { formatDate } from "../../utils/dateFormatter"

const Header = () => {
  const dataAtual = new Date()
  const dataFormatada = formatDate(dataAtual)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>
      <div className={styles.welcome}>Bem vindo de volta, Marcus</div>
      <div className={styles.date}>{dataFormatada}</div>
    </header>
  )
}

export default Header
