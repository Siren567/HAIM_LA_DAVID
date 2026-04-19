import { PageHeader } from '../components/layout/PageHeader'
import { Container } from '../components/ui/Container'

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ישיבה"
        title="מקום של תורה וקהילה"
        lead="מעבר לשיעורים — דרך התנהלות, כבוד הדדי ושבת שמרגישה כמו בית."
      />
      <section className="page-section">
        <Container narrow>
          <div className="page-prose">
            <p>
              אנחנו מאמינים שהיוקרה האמיתית של הישיבה נמצאת בפרטים הקטנים: איך נכנסים לשיעור, איך
              מדברים עם חבר, ואיך שומרים על קצב יום בריא שלא שורף את האדם.
            </p>
            <p>
              הצוות הרוחני מכיר את התלמידים לעומק ומחפש מסגרת שתאפשר לכל אחד למצוא את מקומו — בלי
              להתפשר על רף לימודי, ובלי להפוך את המקום למפעל לחץ.
            </p>
            <h2>קהילה, לא רק כיתה</h2>
            <p>
              הישיבה חיה כקהילה קטנה: שבתות משותפות, שיחה פתוחה וליווי כשצריך. זו שכבת קשר אנושי
              שמחזיקה מעבר לשעות הלימוד הפורמליות — בשקט, בלי רעש של «פעילויות».
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
