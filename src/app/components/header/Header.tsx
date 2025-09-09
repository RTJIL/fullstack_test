import styles from './style.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
