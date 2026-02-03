// Shared types for navigation components
import { UrlObject } from "url";
import { routing } from "@/i18n/routing";

/**
 * Navigation paths derived from routing configuration.
 * These are "pathname keys" that next-intl uses to generate locale-specific URLs.
 * 
 * For example:
 * - Using pathname key: "/kompetenzen"
 * - German URL: /de/kompetenzen
 * - English URL: /en/expertise
 * 
 * The Link component handles the translation automatically based on current locale.
 */
export type NavigationPath = keyof typeof routing.pathnames;

// Extended href type for external links and complex URLs
export type AllowedHref =
  | NavigationPath
  | string // For external URLs
  | ({ pathname: NavigationPath; } & Omit<UrlObject, "pathname">);

// Navigation item structure used by components
export interface NavigationItem {
  name: string;
  link: NavigationPath;
}