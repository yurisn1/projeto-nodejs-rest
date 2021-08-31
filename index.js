//faz a requisição dos dados de configuração do sistema
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

//O connect é utilizado para se conectar ao banco de dados
conexao.connect(erro => {
    //exibe erro do mysql
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
            //chamando a função de configuração
        const app = customExpress()
            //resposta do para o servidor
        app.listen(3000, () => console.log("servidor rodando na porta 3000"))
    }
})