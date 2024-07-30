import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: ['/api/user/webhooks', '/api/subcription/webhooks', '/']
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/']
};
