const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`
        CREATE TABLE Feedbacks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            feedback TEXT NOT NULL,
            rating INTEGER NOT NULL,
            created_at DATABASE DEFAULT CURRENT_TIMESTAMP
        )

    `);
});

module.exports = db;