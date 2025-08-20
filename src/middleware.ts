import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'
import { cookies } from 'next/headers'

  // 1. Указать защищенные и публичные маршруты
const protectedRoutes = ['/admin-zone', '/admin-zone/service', '/admin-zone/projects']
  // 1.1 Запрещёнка для аутентифицированных [Проверить]
const publicRoutes = ['/admin-zone/login', '/']

export default async function middleware(req: NextRequest) {
  // 2. Проверить, является ли текущий маршрут защищенным или публичным
  const path = req.nextUrl.pathname

  //includes. Если еслемент есть в массиве - возвращаем true, иначе false
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. Расшифровать сессию из cookie
  // () - сначала выполняется
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  // 4. Перенаправить на /admin-zone/login, если пользователь не аутентифицирован
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/admin-zone/login', req.nextUrl))
  }

  // 5. Перенаправить на /admin-zone, если пользователь аутентифицирован
  if (
    isPublicRoute &&
    session?.userId 
    // && !req.nextUrl.pathname.startsWith('/admin-zone/login')
  ) {
    return NextResponse.redirect(new URL('/admin-zone', req.nextUrl))
  }

  return NextResponse.next()
}

// Маршруты, на которых Middleware не должен выполняться
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}