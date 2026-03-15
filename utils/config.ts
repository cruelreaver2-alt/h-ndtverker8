/**
 * Application Configuration
 * Centralized config for domain and URLs
 */

// Get domain from environment or use production domain
export const APP_DOMAIN = import.meta.env.VITE_APP_DOMAIN || 'handverkeren.no';

// Build full URLs
export const APP_URL = `https://${APP_DOMAIN}`;

// Common URLs
export const URLS = {
  home: APP_URL,
  signup: `${APP_URL}/signup`,
  login: `${APP_URL}/logg-inn`,
  about: `${APP_URL}/about`,
  privacy: `${APP_URL}/privacy`,
  terms: `${APP_URL}/terms`,
  unsubscribe: `${APP_URL}/unsubscribe`,
};

// Get signup URL with invite code
export function getSignupUrl(inviteCode?: string): string {
  return inviteCode 
    ? `${URLS.signup}?invite=${inviteCode}`
    : URLS.signup;
}
