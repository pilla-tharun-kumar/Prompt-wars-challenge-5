/** Centralized branding identity for the application */
export const BRAND = {
  name: 'Pranalika',
  company: 'Pranalika Technologies',
  tagline: 'Celebration Intelligence & Connected Planning',
  subtitle: 'One connected plan. Every celebration, elevated.',
  shortName: 'Pranalika',
  primaryColor: '#6d28d9',
  supportEmail: 'concierge@pranalika.com',
  version: '2.0.0',
} as const;

export type Brand = typeof BRAND;

