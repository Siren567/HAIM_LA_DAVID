import { getFeaturedProducts } from '../../data/products'
import { Container } from '../ui/Container'
import { SectionHeading, SectionDivider } from '../ui/SectionHeading'
import { ButtonLink } from '../ui/ButtonLink'
import { ProductCard } from '../shop/ProductCard'
import styles from './FeaturedProducts.module.css'

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="חנות יודאיקה"
          title="מוצרים נבחרים באותה שפה עיצובית"
          subtitle="פריטים שמכבדים את הבית והתפילה — איכות חומרים, קו נקי, וזהב עדין."
        />
        <SectionDivider />
        <div className={styles.grid}>
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className={styles.footer}>
          <ButtonLink to="/shop" variant="primary">
            לחנות המלאה
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
