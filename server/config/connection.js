// db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'shanemcelrath',
    host: '127.0.0.1',
    database: 'graphqltestingdb',
    password: 'password1234',
    port: '3000',
});

module.exports = pool;
