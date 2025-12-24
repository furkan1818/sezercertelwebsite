"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <header className={styles.header}>
<Link href="/" className={styles.logo} aria-label="Ana sayfa">
  <img src="/sezer-certel-logo.svg" alt="SMM Logo" className={styles.logoImg} />
</Link>

        <nav className={styles.nav}>
          <Link href="/#hizmetler" className={styles.navLink}>
            Hizmetler
          </Link>
          <Link href="/#hakkimizda" className={styles.navLink}>
            Hakkımızda
          </Link>
          <Link href="/#makaleler" className={styles.navLink}>
            Makaleler
          </Link>
        </nav>

        <Link href="/iletisim" className={styles.ctaButton}>
          İletişime Geç
        </Link>

        <button
          className={`${styles.hamburger} ${isDrawerOpen ? styles.active : ""}`}
          onClick={toggleDrawer}
          aria-label="Menü"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </header>

      <div className={`${styles.overlay} ${isDrawerOpen ? styles.visible : ""}`} onClick={closeDrawer} />

      <nav className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
        <div className={styles.drawerNav}>
          <Link href="/#hizmetler" className={styles.drawerLink} onClick={closeDrawer}>
            Hizmetler
          </Link>
          <Link href="/#hakkimizda" className={styles.drawerLink} onClick={closeDrawer}>
            Hakkımızda
          </Link>
          <Link href="/#makaleler" className={styles.drawerLink} onClick={closeDrawer}>
            Makaleler
          </Link>
          <Link href="/iletisim" className={styles.drawerCta} onClick={closeDrawer}>
            İletişime Geç
          </Link>
        </div>
      </nav>
    </>
  )
}
