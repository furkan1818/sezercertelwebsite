import type { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Şirket Açılış İşlemleri | SMM Mali Müşavirlik",
  description:
    "Şirket kuruluş işlemleri için başvuru formu. Limited, anonim ve şahıs şirketi kuruluşu hakkında bilgi alın.",
}

export default function CompanySetupPage() {
  return (
    <section className={styles.companySetup}>
      <div className={styles.companySetupInner}>
        <h1 className={styles.pageTitle}>Şirket Açılış İşlemleri</h1>
        <p className={styles.pageSubtitle}>
          Şirket kuruluş sürecinizi başlatmak için aşağıdaki formu doldurun. En kısa sürede sizinle iletişime geçeceğiz.
        </p>

        <form className={styles.formCard}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="fullName">
              Ad Soyad
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={styles.formInput}
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="phone">
              Telefon
            </label>
            <input type="tel" id="phone" name="phone" className={styles.formInput} placeholder="+90 5XX XXX XX XX" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              E-posta
            </label>
            <input type="email" id="email" name="email" className={styles.formInput} placeholder="ornek@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="companyType">
              Şirket Türü
            </label>
            <select id="companyType" name="companyType" className={styles.formSelect}>
              <option value="">Şirket türü seçin</option>
              <option value="limited">Limited Şirket</option>
              <option value="anonim">Anonim Şirket</option>
              <option value="sahis">Şahıs Şirketi</option>
              <option value="kooperatif">Kooperatif</option>
              <option value="other">Diğer</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Başvuru Gönder
          </button>

          <p className={styles.infoNote}>
            Formunuzu aldıktan sonra 24 saat içinde sizinle iletişime geçeceğiz. Şirket kuruluş süreciniz hakkında
            detaylı bilgi vereceğiz.
          </p>
        </form>
      </div>
    </section>
  )
}
