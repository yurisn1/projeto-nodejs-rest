//requisitando o mysql no projeto
const mysql = require('mysql')

//levando dados para conexão no servidor
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'agenda-petshop'
})

//Exportando a conexão para que ela seja usada em outros modulos
module.exports = conexao