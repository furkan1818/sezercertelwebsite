import Link from "next/link"
import { articles } from "@/lib/articles-data"
import styles from "./articles.module.css"

export default function Articles() {
  return (
    <section id="makaleler" className={styles.articles}>
      <div className={styles.articlesInner}>
        <div className={styles.sectionLabel}>MAKALELER</div>
        <h2 className={styles.sectionTitle}>Güncel Mali Bilgiler</h2>

        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <Link key={article.slug} href={`/makaleler/${article.slug}`} className={styles.articleCardLink}>
              <article className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.articleDate}>{article.date}</div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
