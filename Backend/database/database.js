require('dotenv').config();
const Sequelize = require('sequelize');

/***** CRIA A CONEXÃO COMO BANCO DE DADOS *****/
/*
PARAMETROS DO SEQUELIZE
1 - NOME DO BANCO - STRING
2 - USUÁRIO DO BANCO - STRING
3 - SENHA DO BANCO - STRING
4 - JSON:
    4.1 - O LOCAL ONDE O BANCO ESTÁ EXECUTANTO (host)
    4.2 - PORTA LÓGICA ONDE O BANCO ESTA SENDO EXECUTADO
    4.3 - TIPO DO BANCO (dialect)
    4.4 - DEFINE O FUSO HORARIO LOCAL
*/
const connection = new Sequelize(
    // 'bd_libri_api',
    // 'root',
    // 'etecembu@123',
    // '',
    'bd_libri_api',
    `${process.env.DATABASE_USER}`,
    `${process.env.DATABASE_PASSWORD}`,
    // '',

    {
        host:`${process.env.DATABASE_HOST}`,
        port: `${process.env.DATABASE_PORT}`,
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;