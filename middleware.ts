import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';

const locales = ['en', 'ar'];

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ar|en)/:path*']
};

export const runtime = 'edge';