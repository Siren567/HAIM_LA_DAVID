import { Container } from '../ui/Container'

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string
  title: string
  lead?: string
}) {
  return (
    <div className="page-hero">
      <Container className="page-hero__inner">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        {lead ? <p className="page-hero__lead">{lead}</p> : null}
      </Container>
    </div>
  )
}
