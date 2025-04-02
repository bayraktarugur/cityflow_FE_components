import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';

const locales = ['en', 'ar', 'de'];

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
  pathnames: {
    '/': '/',
    '/dashboard': '/dashboard',
    '/dashboard/{path}': '/dashboard/{path}',
    '/ecommerce': '/ecommerce',
    '/ecommerce/{path}': '/ecommerce/{path}',
    '/project': '/project',
    '/project/{path}': '/project/{path}',
    '/crm': '/crm',
    '/crm/{path}': '/crm/{path}',
    '/components': '/components',
    '/components/{path}': '/components/{path}',
    '/utility': '/utility',
    '/utility/{path}': '/utility/{path}',
    '/apps': '/apps',
    '/apps/{path}': '/apps/{path}',
    '/pages': '/pages',
    '/pages/{path}': '/pages/{path}',
    '/authentication': '/authentication',
    '/authentication/{path}': '/authentication/{path}',
    '/elements': '/elements',
    '/elements/{path}': '/elements/{path}',
    '/forms': '/forms',
    '/forms/{path}': '/forms/{path}',
    '/table': '/table',
    '/table/{path}': '/table/{path}',
    '/widget': '/widget',
    '/widget/{path}': '/widget/{path}',
    '/chart': '/chart',
    '/chart/{path}': '/chart/{path}',
    '/maps': '/maps',
    '/maps/{path}': '/maps/{path}'
  }
});

export const config = {
  matcher: ['/', '/(ar|en|de)/:path*']
};