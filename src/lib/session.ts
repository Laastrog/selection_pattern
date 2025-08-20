import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
// import { SessionPayload } from '@/app/lib/definitions'

const secretKey = "s76fJnTWmO4Vz2a_YsW1ol2-iSB_ZAoo9U3skvsYLuY"
// TextEncoder. Кодирует строку в поток байтов с использованием кодировки UTF-8
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Не удалось проверить сессию.')
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ userId, expiresAt })
  const cookieStore = await cookies()

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })

// HttpOnly: Предотвращает доступ к cookie из JavaScript на стороне клиента;
// Secure: Использует https для отправки cookie;
// SameSite: Указывает, может ли cookie отправляться с межсайтовыми запросами;
// Max-Age или Expires: Удаляет cookie после определенного периода;
// Path: Определяет URL-путь для cookie.
}