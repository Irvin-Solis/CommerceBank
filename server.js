require('dotenv').config()

const express = require('express');
const cors = require('cors');
const connection = require('./database');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/status', (req, res) => res.send('Working!'));

app.get('/api/getTransactions/:id', (req, res) => {
  connection.query(
    `SELECT * FROM transactions WHERE account_num=?`, req.params.id,
    function(err, result) {
      if (err) throw err;
      console.log(res.json(result));
    }
  );
});

app.get('/api/getUser/:id', (req, res) => {
  connection.query(
    `SELECT user_id, username FROM users WHERE user_id=?`, req.params.id,
    function(err, result) {
      if (err) throw err;
      console.log(res.json(result));
    }
  );
});

app.get('/api/getUserPass/:pass', (req, res) => {
  connection.query(
    `SELECT user_id FROM users WHERE password=?`, req.params.pass,
    function(err, result) {
      if (err) throw err;
      console.log(res.json(result));
    }
  );
});

app.get('/api/getUserAccounts/:id', (req, res) => {
  connection.query(
    `SELECT account_num FROM accounts WHERE user_id=?`, req.params.id,
    function(err, result) {
      if (err) throw err;
      console.log(res.json(result));
    }
  );
});

app.get('/api/username/:id', (req, res) => {
  connection.query(
    `SELECT username FROM users WHERE user_id=?`, req.params.id,
    function(err, result) {
      if (err) throw err;
      console.log(res.json(result));
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})