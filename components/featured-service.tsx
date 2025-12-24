import Link from "next/link"
import styles from "./featured-service.module.css"

export default function FeaturedService() {
  return (
    <section id="hakkimizda" className={styles.featuredService}>
      <div className={styles.featuredContent}>
        <div className={styles.featuredImage}>
          <img src="/professional-team-meeting-in-modern-office-discuss.jpg" alt="Mali Müşavirlik Ekibi" />
        </div>

        <div className={styles.featuredText}>
          <h2 className={styles.featuredTitle}>10 Yılı Aşkın Tecrübe ile Serbest Mali Müşavirlik Hizmetleri</h2>
          <p className={styles.featuredDescription}>
            Serbest Mali Müşavir olarak, farklı ölçeklerdeki işletmelere muhasebe ve vergi hizmetleri sunuyoruz.
Güncel mevzuat kapsamında mali işlemlerin düzenli ve doğru şekilde yürütülmesini sağlıyor, işletmelerin yasal yükümlülüklerini zamanında yerine getirmelerine destek oluyoruz.
          </p>
          <Link href="/iletisim" className={styles.featuredCta}>
            Bizimle Çalışın
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
