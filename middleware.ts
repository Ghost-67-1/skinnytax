import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: [
    '/api/user/webhooks',
    '/api/subcription/webhooks',
    '/',
    '/blog',
    '/capital-tax',
    '/carried-interest',
    '/charitable-trust',
    '/contact',
    '/estate-tax',
    '/family-office',
    '/income-tax',
    '/pricing',
    '/qsbs'
  ]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/']
};
