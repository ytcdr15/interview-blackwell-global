import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import Database from 'better-sqlite3';
import { uuidv7 } from 'uuidv7';

export const auth = betterAuth({
  database: new Database('./sqlite.db', {
    fileMustExist: false,
  }),
  // customize user scheme with additional columns
  user: {
    fields: {
      name: 'name',
      email: 'email',
      emailVerified: 'email_verified',
      image: 'image',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    additionalFields: {
      firstName: {
        fieldName: 'first_name',
        type: 'string',
        required: false,
        input: true,
      },
      lastName: {
        fieldName: 'last_name',
        type: 'string',
        required: false,
        input: true,
      },
      mobileNo: {
        fieldName: 'mobile_no',
        type: 'string',
        required: false,
        input: true,
      },
      country: {
        fieldName: 'country',
        type: 'string',
        required: false,
        input: true,
      },
    },
  },
  account: {
    fields: {
      userId: 'user_id',
      accountId: 'account_id',
      providerId: 'provider_id',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
      accessTokenExpiresAt: 'access_token_expires_at',
      refreshTokenExpiresAt: 'refresh_token_expires_at',
      scope: 'scope',
      idToken: 'id_token',
      password: 'password',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  session: {
    fields: {
      userId: 'user_id',
      token: 'token',
      expiresAt: 'expires_at',
      ipAddress: 'ip_address',
      userAgent: 'user_agent',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  verification: {
    fields: {
      identifier: 'identifier',
      value: 'value',
      expiresAt: 'expires_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  plugins: [nextCookies()],
  advanced: {
    database: {
      // configure database id to be an uuid v7
      generateId: () => uuidv7(),
    },
    cookiePrefix: 'bw',
    defaultCookieAttributes: {
      maxAge: 5 * 60,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
