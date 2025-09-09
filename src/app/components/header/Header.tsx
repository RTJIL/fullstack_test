'use client'

import styles from './style.module.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.container}>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {open && (
        <ul className={styles.mobileMenu}>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      )}
    </header>
  )
}
