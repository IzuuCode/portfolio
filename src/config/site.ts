const trimEnv = (value: string | undefined): string => (value ?? '').trim();

const APP_EMAIL = trimEnv(import.meta.env.VITE_APP_EMAIL) || 'your-email@example.com';
const APP_PHONE = trimEnv(import.meta.env.VITE_APP_PHONE) || '+00 000 000 0000';
const APP_WHATSAPP = trimEnv(import.meta.env.VITE_APP_WHATSAPP_NUMBER);

export const siteConfig = {
  social: {
    github: trimEnv(import.meta.env.VITE_SOCIAL_GITHUB) || 'https://github.com/',
    linkedin: trimEnv(import.meta.env.VITE_SOCIAL_LINKEDIN) || 'https://www.linkedin.com/',
    behance: trimEnv(import.meta.env.VITE_SOCIAL_BEHANCE) || 'https://www.behance.net/',
    whatsappUrl: APP_WHATSAPP
      ? `https://api.whatsapp.com/send/?phone=${encodeURIComponent(APP_WHATSAPP)}&text=${encodeURIComponent('Hello')}&type=phone_number&app_absent=0`
      : '',
    email: APP_EMAIL,
  },
  contact: {
    email: APP_EMAIL,
    phone: APP_PHONE,
    location: trimEnv(import.meta.env.VITE_APP_LOCATION) || 'Your location',
  },
  emailJs: {
    serviceId: trimEnv(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    templateId: trimEnv(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: trimEnv(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  },
};
