import Link from "next/link"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>İşletmeniz İçin <br></br>Profesyonel Mali Danışmanlık</h1>
          <p className={styles.heroSubtitle}>
            İşletmenizin mali işlemlerini ve yasal yükümlülüklerini güncel mevzuat çerçevesinde yürütüyoruz. Muhasebe ve vergi süreçlerinde doğru ve düzenli ilerlemenizi sağlıyoruz.
          </p>

          <div className={styles.valueCards}>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>10+</div>
              <div className={styles.valueLabel}>Yıllık Tecrübe</div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>1000+</div>
              <div className={styles.valueLabel}>Mükellef</div>
            </div>
          </div>

          <Link href="/iletisim" className={styles.heroCta}>
            Hemen İletişime Geç
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>


      </div>
    </section>
  )
}
