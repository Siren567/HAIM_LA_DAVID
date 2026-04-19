import styles from './StaffCard.module.css'

export function StaffCard({
  nameHe,
  roleHe,
  bio,
  image,
}: {
  nameHe: string
  roleHe: string
  bio: string
  image: string
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt="" className={styles.image} loading="lazy" />
        <div className={styles.frame} aria-hidden />
      </div>
      <div className={styles.body}>
        <p className={styles.role}>{roleHe}</p>
        <h3 className={styles.name}>{nameHe}</h3>
        <p className={styles.bio}>{bio}</p>
      </div>
    </article>
  )
}
