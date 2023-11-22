/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_appUrl: string;
  readonly VITE_baseUrl: string;
  readonly VITE_storageUrl: string;
  readonly VITE_shopify_callback_url: string;
  readonly VITE_clientId: string;
  readonly VITE_googleMapsAPIKey: string;
  readonly VITE_s3_baseUrl: string;
  readonly VITE_s3_app_link_windows: string;
  readonly VITE_s3_app_link_apple_m1: string;
  readonly VITE_s3_app_link_apple_intel: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'is-european' {
  export function euMember(iso: string): boolean;
  export function eeuMember(iso: string): boolean;
}
//comment
