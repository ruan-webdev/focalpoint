import Image from "next/image"
import styles from "../../styles/Header.module.scss"

const Header = () => {
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
      <div className={styles.date}>Sexta, 20 de setembro de 2024</div>
    </header>
  )
}

export default Header
