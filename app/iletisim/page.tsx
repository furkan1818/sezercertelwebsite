import type { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "İletişim | SMM Mali Müşavirlik",
  description: "Bizimle iletişime geçin. Mali müşavirlik hizmetleri hakkında bilgi almak için formu doldurun.",
}

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <h1 className={styles.pageTitle}>İletişime Geçin</h1>
        <p className={styles.pageSubtitle}>
          Mali müşavirlik hizmetlerimiz hakkında bilgi almak veya randevu oluşturmak için bize ulaşın.
        </p>

        <div className={styles.contactContent}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">
                Ad Soyad
              </label>
              <input type="text" id="name" name="name" className={styles.formInput} placeholder="Adınız/Şirket Adı" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                E-posta
              </label>
              <input type="email" id="email" name="email" className={styles.formInput} placeholder="E-posta adresinizi giriniz" />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Mesaj Gönder
            </button>
          </form>

          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Adres
              </h3>
              <p className={styles.infoText}>
                Atakent Mahallesi, gerisini bilmiyom..
                <br />
                Küçükçekmece, İstanbul 34494
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Telefon
              </h3>
              <p className={styles.infoText}>
                <a href="tel:+902125550000" className={styles.infoLink}>
                  +90 535 490 60 94
                </a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                E-posta
              </h3>
              <p className={styles.infoText}>
                <a href="mailto:info@smmmusavirlik.com" className={styles.infoLink}>
                  bilgi@sezercertel.com
                </a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Çalışma Saatleri
              </h3>
              <p className={styles.infoText}>
                Pazartesi - Cuma: 09:00 - 18:00
                <br />
                Cumartesi: 09:00 - 13:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
