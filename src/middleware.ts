import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(de|en)/:path*']
// };