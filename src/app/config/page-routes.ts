export const pageRoutes = {
  home: (locale: string) => `/${locale}`,
  expertise: (locale: string) => `/${locale}/expertise`,
  services: (locale: string) => `/${locale}/services`,
  team: (locale: string) => `/${locale}/team`,
  imprint: (locale: string) => `/${locale}/imprint`,
  privacy: (locale: string) => `/${locale}/privacy`,
  contact: (locale: string) => `/${locale}/kontakt`,
} as const;
