import Sqlite from 'better-sqlite3';
import {
  CamelCasePlugin,
  Generated,
  Insertable,
  Kysely,
  Selectable,
  SqliteDialect,
  Updateable,
} from 'kysely';

export interface Database {
  user: UserTable;
}

export interface UserTable {
  id: Generated<string>;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  // additional columns
  firstName: string;
  lastName: string;
  mobileNo: string;
  country: string;
}

export interface SessionTable {
  id: Generated<string>;
  userId: string;
  token: string;
  expiresAt: Date;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountTable {
  id: Generated<string>;
  userId: string;
  accountId: string;
  providerId: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiresAt?: Date;
  refreshTokenExpiresAt?: Date;
  scope?: string;
  idToken?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationTable {
  id: Generated<string>;
  identifier: string;
  value: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// schema types
export type User = Selectable<UserTable>;
export type InsertUser = Insertable<UserTable>;
export type UpdateUser = Updateable<UserTable>;

const dialect = new SqliteDialect({
  database: new Sqlite('./sqlite.db'),
});

export const db = new Kysely<Database>({
  dialect,
  // set column name camelCase
  plugins: [new CamelCasePlugin()],
});
