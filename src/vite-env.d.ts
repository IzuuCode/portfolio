/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SOCIAL_GITHUB?: string;
	readonly VITE_SOCIAL_LINKEDIN?: string;
	readonly VITE_SOCIAL_BEHANCE?: string;
	readonly VITE_APP_EMAIL?: string;
	readonly VITE_APP_PHONE?: string;
	readonly VITE_APP_WHATSAPP_NUMBER?: string;
	readonly VITE_APP_LOCATION?: string;
	readonly VITE_EMAILJS_SERVICE_ID?: string;
	readonly VITE_EMAILJS_TEMPLATE_ID?: string;
	readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
