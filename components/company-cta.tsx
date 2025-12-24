import styles from "./company-cta.module.css"

export default function CompanyCta() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Şirket Açılış Sürecini Başlatın</h2>
            <p className={styles.description}>
              Şirket açılış işlemlerini başlatmak için gerekli olan kişisel bilgi formunu doldurabilirsiniz. Paylaşılan
              bilgiler, başvurunun değerlendirilmesi ve ön hazırlık süreci kapsamında kullanılacaktır.
            </p>
          </div>

          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={styles.input}
                  placeholder="Adınızı ve soyadınızı giriniz"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Telefon
                </label>
                <input type="tel" id="phone" name="phone" className={styles.input} placeholder="0 (5XX) XXX XX XX" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  E-posta
                </label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="E-posta adresinizi giriniz" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="companyType" className={styles.label}>
                  Şirket Türü
                </label>
                <select id="companyType" name="companyType" className={styles.select}>
                  <option value="">Şirket türü seçiniz</option>
                  <option value="limited">Limited Şirket</option>
                  <option value="anonim">Anonim Şirket</option>
                  <option value="sahis">Şahıs Şirketi</option>
                  <option value="kooperatif">Kooperatif</option>
                </select>
              </div>

              <button type="submit" className={styles.submitButton}>
                Formu Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
