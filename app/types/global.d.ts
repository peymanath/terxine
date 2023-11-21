declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      GHASEDACK_API_KEY: string;
      GHASEDACK_BASE_URL: string;
      JWT_PRIVATE_KEY: string;
      JWT_PUBLIC_KEY: string;
    }
  }
}
export {};
