declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    ADMIN_EMAILS?: string;
    OWNER_EMAILS?: string;
    ADMIN_PASSWORD_PEPPER?: string;
    ADMIN_SETUP_TOKEN_HASH?: string;
    ADMIN_SETUP_EXPIRES_AT?: string;
    ADMIN_OWNER_EMAIL?: string;
  }
}
