import http from "node:http";

// GET, POST, PUT, PATCH, DELETE
// GET = Buscar recurso do backend
// POST = Sempre para criar uma recurso do backend
// PUT = Atualizar um recurso no backend
// PATCH = Atualizar uma informação única/específica no backend => PUT atuliza mais de uma coisa ao mesmo tempo, PATCH atualização específica
// DELETE = deletar um recurso no back-end

// GET /users => Buscando usuários no back-end
// POST /user => Criando um usuário no back-end

// Stateful != Stateles

// Stateful ela sempre vai ter um informação guardada em memória, ou seja, a aplicação depende da memória, das informações salvas em memória para continuar funcionando, apatir que ela for derrubada ela se perde

// Stateles ela não salva em memória, ela salva em um banco de dados, ou seja, se pararmos essa aplicação ela continua igual

const users = [];



const server = http.createServer((req, res) => {

    const { method, url } = req;

    if(method === "GET" && url === '/users') {
        // Early return -> se bater no return nada abaixo vai ser executado
        // Content-type diz qual é o tipo de conteúdo que está sendo usado
        // applicaton/json é para informa que o tipo de conteúdo é um JSON
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === "/users") {
        users.push({id: 1, name: 'Breno', email: "breno@gmail.com"})
        return res.end("Criação de usuários")
    }

    return res.end('Hello, Ignite!');
});

server.listen(3333);