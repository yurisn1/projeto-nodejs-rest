//requisitando as dependencias instaladas no projeto
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

//Exportando a variaveis para que elas sejam usadas em outros modulos
module.exports = () => {
    //exportando express(framework para criação de apis em node.js)
    const app = express()

    //utilizando body-parser(dependencia do js que decoda/encoda respostas em json,etc...)
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    //utilizando consign (faz as requisições e responses)
    consign()
        .include('controllers')
        .into(app)

    return app
}