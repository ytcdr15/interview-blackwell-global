import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  // user table
  await db.schema
    .createTable('user')
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('name', 'text', (col) => col.notNull())
    .addColumn('email', 'text', (col) => col.notNull().unique())
    .addColumn('email_verified', 'integer', (col) => col.notNull().defaultTo(0))
    .addColumn('image', 'text')
    .addColumn('created_at', 'date', (col) => col.notNull())
    .addColumn('updated_at', 'date', (col) => col.notNull())
    .addColumn('first_name', 'text')
    .addColumn('last_name', 'text')
    .addColumn('mobile_no', 'text')
    .addColumn('country', 'text')
    .execute();

  // session table
  await db.schema
    .createTable('session')
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('user_id', 'text', (col) =>
      col.references('user.id').notNull().onDelete('cascade')
    )
    .addColumn('token', 'text', (col) => col.notNull().unique())
    .addColumn('expires_at', 'date', (col) => col.notNull())
    .addColumn('ip_address', 'text')
    .addColumn('user_agent', 'text')
    .addColumn('created_at', 'date', (col) => col.notNull())
    .addColumn('updated_at', 'date', (col) => col.notNull())
    .execute();

  // account table
  await db.schema
    .createTable('account')
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('user_id', 'text', (col) =>
      col.references('user.id').notNull().onDelete('cascade')
    )
    .addColumn('account_id', 'text', (col) => col.notNull())
    .addColumn('provider_id', 'text', (col) => col.notNull())
    .addColumn('access_token', 'text')
    .addColumn('refresh_token', 'text')
    .addColumn('access_token_expires_at', 'date')
    .addColumn('refresh_token_expires_at', 'date')
    .addColumn('scope', 'text')
    .addColumn('id_token', 'text')
    .addColumn('password', 'text')
    .addColumn('created_at', 'date', (col) => col.notNull())
    .addColumn('updated_at', 'date', (col) => col.notNull())
    .execute();

  // verification table
  await db.schema
    .createTable('verification')
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('identifier', 'text', (col) => col.notNull())
    .addColumn('value', 'text', (col) => col.notNull())
    .addColumn('expires_at', 'date', (col) => col.notNull())
    .addColumn('created_at', 'date', (col) => col.notNull())
    .addColumn('updated_at', 'date', (col) => col.notNull())
    .execute();

  // indexes
  await db.schema
    .createIndex('user_email_idx')
    .on('user')
    .column('email')
    .execute();
  await db.schema
    .createIndex('session_user_id_idx')
    .on('session')
    .column('user_id')
    .execute();
  await db.schema
    .createIndex('session_token_idx')
    .on('session')
    .column('token')
    .execute();
  await db.schema
    .createIndex('account_user_id_idx')
    .on('account')
    .column('user_id')
    .execute();
  await db.schema
    .createIndex('verification_identifier_idx')
    .on('verification')
    .column('identifier')
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable('verification').ifExists().execute();
  db.schema.dropTable('account').ifExists().execute();
  db.schema.dropTable('session').ifExists().execute();
  db.schema.dropTable('user').ifExists().execute();
}
