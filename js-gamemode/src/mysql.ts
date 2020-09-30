import mysql from 'mysql';
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "typescript-deathmatch",
    password: ''
});

connection.connect((err: any) => {
    if (err) {
        console.log(err.stack);
        return;
    }

    console.log('[MYSQL] Connected Database - Thread ID: ' + connection.threadId);
});