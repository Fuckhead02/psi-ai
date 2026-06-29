import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

const dbPath = './dev.db';

// Read the migration SQL
const migrationSql = fs.readFileSync('./drizzle/0000_minor_sister_grimm.sql', 'utf-8');

// Create database and run migrations
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    process.exit(1);
  }

  // Split by statement breakpoint and execute each
  const statements = migrationSql
    .split('--> statement-breakpoint')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  let completed = 0;
  statements.forEach((stmt, idx) => {
    db.run(stmt, (err) => {
      if (err) {
        console.error(`Error executing statement ${idx}:`, err);
        console.error('Statement:', stmt);
      } else {
        console.log(`✓ Executed statement ${idx + 1}/${statements.length}`);
      }
      completed++;
      if (completed === statements.length) {
        console.log('✓ Database initialized successfully!');
        db.close();
        process.exit(0);
      }
    });
  });
});
