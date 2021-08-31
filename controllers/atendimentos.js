module.exports = app => {
    //res -> response(envia a resposta ao servidor)
    //req -> request(envia a requisição ao servidor)
    app.get('/atendimentos', (req, res) => res.send('Vc está na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('vc está na rota de atendimentos e está realizando um POST')
    })
}