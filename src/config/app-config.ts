// src/config/app-config.ts
export const APP_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Default Store",
  logo: process.env.NEXT_PUBLIC_LOGO_URL || "/default-logo.svg",
  theme: {
    primary: process.env.NEXT_PUBLIC_PRIMARY_COLOR || "#6B21A8",
    secondary: process.env.NEXT_PUBLIC_SECONDARY_COLOR || "#FCE7F3",
  },
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL,
};