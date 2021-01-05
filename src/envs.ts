import uuidAPIKey from 'uuid-apikey';

export const envs = {
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'UNKNOWN',
    NODE_ENV: process.env.NODE_ENV,
    WEB: {
        PORT: process.env.PORT ?? 52952,
    },
    BOT: {
        COMMIT_HASH: process.env.COMMIT_HASH ?? '',
        TOKEN: process.env.BOT_TOKEN ?? '',
    },
    DATABASE: {
        CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING ?? '',
        DATABASE_NAME: process.env.DATABASE_NAME ?? '',
        HOSTNAME: process.env.DATABASE_HOSTNAME ?? '',
        PASSWORD: process.env.DATABASE_PASSWORD ?? '',
        PORT: process.env.DATABASE_PORT ?? '',
        USERNAME: process.env.DATABASE_USERNAME ?? '',
    },
    OWNER: {
        ID: process.env.OWNER_ID ?? '',
        SERVER: process.env.OWNER_SERVER ?? '',
        BOT_CHANNEL: process.env.OWNER_BOT_CHANNEL ?? '',
    },
    ADMIN: {
        API_KEY: process.env.ADMIN_API_KEY ?? uuidAPIKey.create().apiKey,
        HIDE_KEYS: process.env.ADMIN_HIDE_KEYS ?? false,
    },
};

export type Envs = typeof envs;
