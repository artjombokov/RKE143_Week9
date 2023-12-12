const { Pool } = require('pg');
const itemsPool = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = itemsPool;
