import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleBySlug, getOtherArticles } from "@/lib/articles-data"
import styles from "./page.module.css"

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const otherArticles = getOtherArticles(slug)

  return (
    <main className={styles.articleDetailPage}>
      <div className={styles.articleDetailInner}>
        {/* Left Column - Main Content */}
        <article className={styles.mainContent}>
          <Link href="/#makaleler" className={styles.backLink}>
            <svg className={styles.backIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Makalelere Dön
          </Link>

          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <div className={styles.articleMeta}>
              <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{article.date}</span>
            </div>
          </header>

          <div className={styles.articleBody}>
            {article.content.map((paragraph, index) => (
              <p key={index} className={styles.articleParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Right Column - Other Articles */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <h2 className={styles.sidebarTitle}>Diğer Makaleler</h2>
            <div className={styles.otherArticlesList}>
              {otherArticles.map((otherArticle) => (
                <Link
                  key={otherArticle.slug}
                  href={`/makaleler/${otherArticle.slug}`}
                  className={styles.otherArticleItem}
                >
                  <h3 className={styles.otherArticleItemTitle}>{otherArticle.title}</h3>
                  <p className={styles.otherArticleItemExcerpt}>{otherArticle.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
