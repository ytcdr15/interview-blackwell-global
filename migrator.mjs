import Sqlite from 'better-sqlite3';
import {
  CamelCasePlugin,
  FileMigrationProvider,
  Kysely,
  Migrator,
  SqliteDialect,
} from 'kysely';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';

async function migrateToLatest() {
  const db =
    new Kysely() <
    any >
    {
      dialect: new SqliteDialect({
        database: new Sqlite('./sqlite.db'),
      }),
      // set column name camelCase
      plugins: [new CamelCasePlugin()],
    };

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, 'migrations'),
    }),
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  });

  if (error) {
    console.error('failed to migrate');
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
}

// run migration
migrateToLatest();
