import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <nav className={styles.footerLinks}>
            <Link href="/#hizmetler" className={styles.footerLink}>
              Hizmetlerimiz
            </Link>
            <Link href="/#hakkimizda" className={styles.footerLink}>
              Hakkımızda
            </Link>
            <Link href="/#makaleler" className={styles.footerLink}>
              Makaleler
            </Link>
          </nav>
        </div>
        <div className={styles.footerRight}>
<Link href="/" className={styles.logo} aria-label="Ana sayfa">
  <img src="/sezer-certel-logo-white.svg" alt="SMM Logo" className={styles.logoImg} />
</Link>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>İstanbul, Türkiye</span>
            </div>
            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+90 535 490 60 94</span>
            </div>
            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>bilgi@sezercertel.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>Tüm hakları saklıdır. | 2025</div>
    </footer>
  )
}
