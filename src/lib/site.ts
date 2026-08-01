// Single source of truth for the site's base URL — used by layout.tsx metadata,
// robots.ts, and sitemap.ts. Update this (or set NEXT_PUBLIC_SITE_URL) once
// you're on a custom domain instead of the vercel.app one.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trimmypdf.vercel.app';
