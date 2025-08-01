const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    database: 'mystore_db',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
});

client.connect()
    .then(async () => {
        console.log('Conectado ao PostgreSQL!');
        await client.query("CREATE SCHEMA IF NOT EXISTS store_nodejs;");
        console.log("Schema 'store_nodejs' criado ou já existente.");
    })
    .catch(err => console.error('Erro de conexão:', err))
    .finally(() => client.end());
