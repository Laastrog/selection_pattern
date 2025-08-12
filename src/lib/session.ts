import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
// import { SessionPayload } from '@/app/lib/definitions'

const secretKey = "1234567890qwertyuiop[]/"
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