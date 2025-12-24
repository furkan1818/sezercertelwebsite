import styles from "./services.module.css"

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    title: "Muhasebe ve Defter Tutma",
    description:
      "İşletmenizin yasal defterlerini ve muhasebe kayıtlarını mevzuata uygun şekilde tutuyoruz. Düzenli kayıt ve raporlama ile mali süreçlerinizi şeffaf ve kontrol edilebilir hale getiriyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Vergi Danışmanlığı",
    description:
      "Vergi yükümlülüklerinizi doğru ve zamanında yerine getirmeniz için danışmanlık sağlıyoruz. Beyanname süreçleri ve vergi uygulamalarında güncel mevzuata uygun destek sunuyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "SGK İşlemleri ve Teşvik Danışmanlığı",
    description:
      "SGK bildirimleri, bordro ve personel işlemlerini düzenli olarak gerçekleştiriyoruz. Uygun SGK teşviklerinden yararlanmanız için mevzuata uygun danışmanlık sağlıyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Şirket Kuruluş ve Ticaret Sicil İşlemleri",
    description:
      "Şirket kuruluş ve ticaret sicil işlemlerini mevzuata uygun şekilde yürütüyoruz. Limited, anonim ve şahıs şirketleri için resmi başvuru ve kayıt süreçlerini takip ediyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "KDV İade İşlemleri",
    description:
      "KDV iade süreçlerini mevzuata uygun şekilde hazırlıyor ve takip ediyoruz. Gerekli belge ve başvuruların doğru şekilde yürütülmesini sağlıyoruz.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
    title: "Vergi İade ve Düzeltme İşlemleri",
    description:
      "Fazla veya hatalı ödenen vergilere ilişkin iade ve düzeltme işlemlerini yürütüyoruz. Başvuru ve takip süreçlerini mevzuata uygun şekilde sonuçlandırıyoruz.",
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className={styles.services}>
      <div className={styles.servicesInner}>
        <div className={styles.sectionLabel}>MUHASEBECİLİK HİZMETLERİ</div>
        <h2 className={styles.sectionTitle}>İşletmenizin Tüm Mali İhtiyaçları İçin Profesyonel Çözümler</h2>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
