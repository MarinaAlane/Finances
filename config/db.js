const pool = require('./conection');

const createTableUsers = `
  CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT,
    senha VARCHAR(255)
  );
`;

pool.query(createTableUsers)
  .then(res => {
    console.log('Tabela "user" criada com sucesso!');
    pool.end(); // Encerra a conexão com o banco de dados
  })
  .catch(err => {
    console.error('Erro ao criar a tabela:', err);
    pool.end();
  });