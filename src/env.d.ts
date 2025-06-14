declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;

    /** The base API URL of `thesportsdb.com` API  */
    API_BASE_URL: string

    /** The API key to access `thesportsdb.com` API  */
    API_KEY: string
  }
}
