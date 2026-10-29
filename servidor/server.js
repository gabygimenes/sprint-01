import express from 'express'

const app = express()
const porta = 3000

//GET- página inicial
app.get('/',(req, res) => {
    res.send('Bem-vindo à Central de informações da escola!');
});

//GET - Estado do servidor
app.get('/status', (req, res) => {
 res.json({ status: "online", mensagem: "Servidor rodando com sucesso." });
});

// GET escola — Informações da instituição
app.get('/escola', (req, res) => {
    res.json([{
        nome: "Escola Técnica de Tecnologia",
        cidade: "São Paulo",
        tipo: "Ensino Técnico"
    }]);
});

// GET cursos — Cursos disponíveis 
app.get('/cursos', (req, res) => {
    res.json([
        { id: 1, nome: "Desenvolvimento de Sistemas" },
        { id: 2, nome: "Redes de Computadores" },
        { id: 3, nome: "Administração" }
    ]);
});

// GET professor — Informações do professor 
app.get('/professor', (req, res) => {
    res.json({
        nome: "Carlos Silva",
        disciplina: "Programação Back-End"
    });
});

// GET ajuda — Orientações 
app.get('/ajuda', (req, res) => {
    const orientacoes = `
    Rotas disponíveis no sistema:
    - GET /         : Página inicial com mensagem de boas-vindas.
    - GET /status   : Verifica se o servidor está online.
    - GET /escola   : Retorna dados da instituição (Nome, Cidade, Tipo).
    - GET /cursos   : Lista os cursos técnicos disponíveis.
    - GET /professor: Mostra o nome do professor e sua respectiva disciplina.
    - GET /ajuda     : Apresenta esta lista de orientações.
    `;
    res.send(orientacoes);
});
//DESAFIO EXTRA
app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: "Solicitação recebida com sucesso!"
  });
});
// 01 — Iniciando o servidor na porta 3000
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
