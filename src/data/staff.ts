export type StaffMember = {
  id: string
  nameHe: string
  roleHe: string
  bio: string
  image: string
}

export const staff: StaffMember[] = [
  {
    id: 'rosh-1',
    nameHe: 'הרב דוד בן־חיים שליט״א',
    roleHe: 'ראש הישיבה',
    bio: 'מחנך דור של תלמידים שמחפשים עומק בגמרא יחד עם רגישות אנושית. מלמד סדר קבוע בכולל ומוביל את קו הרוח של המוסד.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
  {
    id: 'mashgiach-1',
    nameHe: 'הרב יוסף אהרן כהן',
    roleHe: 'משגיח רוחני',
    bio: 'מלווה את התלמידים בבהירות ובסבלנות, בונה שגרת יום שמזינה התמדה ושמחה פנימית.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
  {
    id: 'ram-1',
    nameHe: 'הרב אליהו מרדכי לוי',
    roleHe: 'ר״מ — שיעור א׳',
    bio: 'מתמחה בהדגשת דיוק לשוני וחיבור בין ראשונים לאחרונים. ידוע בשיעורים המאורגנים והשקטים.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
  },
  {
    id: 'ram-2',
    nameHe: 'הרב נתן אורי גולדשטיין',
    roleHe: 'ר״מ — שיעור ב׳',
    bio: 'מפתח חשיבה תלמודית עצמאית, תוך שמירה על קצב נעים וסביבה תומכת.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
  },
]
