export interface Article {
  slug: string
  date: string
  title: string
  excerpt: string
  image: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: "2025-vergi-degisiklikleri",
    date: "15 Aralık 2024",
    title: "2025 Yılı Vergi Değişiklikleri ve İşletmelere Etkileri",
    excerpt:
      "Yeni yılda yürürlüğe girecek vergi düzenlemeleri ve işletmelerin bu değişikliklere nasıl uyum sağlayacağı hakkında bilgiler.",
    image: "/tax-documents-and-calculator-on-desk.jpg",
    content: [
      "2025 yılı itibarıyla Türkiye'de vergi mevzuatında önemli değişiklikler yürürlüğe girmektedir. Bu değişiklikler, hem bireysel mükellefleri hem de kurumsal yapıları doğrudan etkileyecek niteliktedir. İşletmelerin bu yeni düzenlemelere uyum sağlaması, mali açıdan sağlıklı bir yapı sürdürebilmeleri için kritik önem taşımaktadır.",
      "Kurumlar vergisi oranlarında yapılan güncellemeler, özellikle KOBİ'ler için yeni teşvik mekanizmalarını beraberinde getirmektedir. İhracat yapan firmalar için ek vergi avantajları ve Ar-Ge faaliyetlerine yönelik indirimler genişletilmiştir. Bu düzenlemeler, işletmelerin rekabet gücünü artırmayı ve yatırım ortamını iyileştirmeyi hedeflemektedir.",
      "KDV uygulamalarında da önemli değişiklikler söz konusudur. Bazı sektörlerde indirimli KDV oranları uygulanmaya başlanırken, e-ticaret ve dijital hizmetlerde vergilendirme esasları yeniden düzenlenmiştir. İşletmelerin muhasebe sistemlerini bu değişikliklere göre güncellemeleri gerekmektedir.",
      "Beyanname verme süreleri ve ödeme takvimlerinde yapılan değişiklikler de dikkatle takip edilmelidir. Cezai yaptırımların ağırlaştırıldığı bu dönemde, zamanında ve doğru beyanname vermek her zamankinden daha önemli hale gelmiştir. Profesyonel mali müşavirlik desteği almak, bu süreçte işletmelere güvence sağlayacaktır.",
    ],
  },
  {
    slug: "e-fatura-zorunlulugu",
    date: "8 Aralık 2024",
    title: "E-Fatura Zorunluluğu: Bilmeniz Gerekenler",
    excerpt:
      "Elektronik fatura uygulamasının kapsamı genişliyor. İşletmenizin e-fatura yükümlülüğü ve geçiş süreci hakkında rehber.",
    image: "/digital-invoice-on-computer-screen.jpg",
    content: [
      "Elektronik fatura (e-Fatura) uygulaması, Türkiye'de dijital dönüşümün en önemli adımlarından biri olarak hayatımıza girmiştir. 2024 yılı sonu itibarıyla e-fatura zorunluluğu kapsamı genişletilmiş, daha fazla işletme bu sisteme dahil edilmiştir. Henüz geçiş yapmamış işletmelerin bu süreci doğru planlaması büyük önem taşımaktadır.",
      "E-Fatura sistemine geçiş için öncelikle Gelir İdaresi Başkanlığı'na başvuru yapılması gerekmektedir. Mali mühür veya elektronik imza temin edilmeli, uygun bir e-fatura yazılımı seçilmelidir. Geçiş sürecinde mevcut faturalama sistemlerinin entegrasyonu ve personel eğitimi de kritik adımlardır.",
      "E-Fatura kullanımının işletmelere birçok avantajı bulunmaktadır. Kağıt, baskı ve posta masraflarından tasarruf sağlanır. Faturaların arşivlenmesi ve takibi kolaylaşır. Tahsilat süreçleri hızlanır ve muhasebe kayıtlarında hata oranı önemli ölçüde azalır.",
      "Zorunluluk kapsamında olmayan işletmeler de gönüllü olarak e-fatura sistemine geçebilir. Özellikle e-fatura mükelleflerine mal veya hizmet satan işletmeler için bu geçiş, iş süreçlerini kolaylaştıracaktır. Profesyonel destek alarak bu geçişi sorunsuz gerçekleştirebilirsiniz.",
    ],
  },
  {
    slug: "sirket-kurarken-dikkat-edilmesi-gerekenler",
    date: "1 Aralık 2024",
    title: "Şirket Kurarken Dikkat Edilmesi Gerekenler",
    excerpt:
      "Yeni bir şirket kurmadan önce bilmeniz gereken hukuki ve mali konular. Doğru şirket türünü seçmek için ipuçları.",
    image: "/business-startup-meeting-with-documents.jpg",
    content: [
      "Yeni bir şirket kurmak, girişimciler için heyecan verici bir adımdır. Ancak bu süreçte alınacak kararlar, işletmenin geleceğini doğrudan etkileyecektir. Doğru şirket türünün seçilmesi, sermaye yapısının belirlenmesi ve hukuki prosedürlerin eksiksiz tamamlanması başarılı bir başlangıç için kritik öneme sahiptir.",
      "Türkiye'de en yaygın şirket türleri limited şirket ve anonim şirkettir. Limited şirketler daha az sermaye gereksinimi ve basit yönetim yapısıyla küçük ve orta ölçekli işletmeler için uygundur. Anonim şirketler ise halka arz imkanı, kurumsal yapı ve daha geniş finansman seçenekleri sunar. Faaliyet alanınıza ve büyüme hedeflerinize göre doğru seçimi yapmalısınız.",
      "Şirket kuruluş aşamasında vergi dairesi kaydı, ticaret sicil tescili, imza sirküleri ve faaliyet belgesi gibi birçok resmi işlem tamamlanmalıdır. SGK işyeri kaydı ve varsa sektörel izinler de alınmalıdır. Bu işlemlerin doğru ve zamanında yapılması, ileride karşılaşılabilecek sorunları önleyecektir.",
      "Mali müşavir desteği almak, şirket kuruluş sürecini önemli ölçüde kolaylaştırır. Uygun şirket türünün belirlenmesinden vergi planlamasına, muhasebe sisteminin kurulmasından yasal yükümlülüklerin takibine kadar tüm süreçlerde profesyonel rehberlik alabilirsiniz. Doğru başlangıç, uzun vadeli başarının temelidir.",
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getOtherArticles(currentSlug: string): Article[] {
  return articles.filter((article) => article.slug !== currentSlug)
}
