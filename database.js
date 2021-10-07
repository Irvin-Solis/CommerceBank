const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if(err){
        console.log('ERROR CONNECTING:' + err.stack)
        return;
    }
    console.log('Connected as thread id' + connection.threadId);
});

module.exports = connection;