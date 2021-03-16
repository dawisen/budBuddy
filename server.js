const sqlite3 = require('sqlite3').verbose();
// verbose allows you to produce long stack traces 

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// returns a Database object and opens the db connection automatically.
// it accepts a callback function that will be called
// when the database opened successfully or when an error occurred.

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Closed the database connection.");
});

// The close() method will wait for all pending queries completed 
//before actually closing the database.
// It also accepts a callback that indicates whether an error occurred 
//while closing the connection.