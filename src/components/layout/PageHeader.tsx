import { Container } from '../ui/Container'

export function PageHeader({
  eyebrow,
  title,
  lead,
  className = '',
}: {
  eyebrow?: string
  title: string
  lead?: string
  /** מחלקות נוספות לעטיפה (למשל page-hero--contact) */
  className?: string
}) {
  return (
    <div className={`page-hero ${className}`.trim()}>
      <Container className="page-hero__inner">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
      </Container>
    </div>
  )
}
