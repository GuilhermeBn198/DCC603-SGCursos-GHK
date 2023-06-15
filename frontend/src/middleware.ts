export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/categories/:path*',
    '/courses/:path*',
    '/classes/:path*',
    '/users/:path*',
    '/certificates/:path*'
  ]
}
