import http from "node:http";

// GET, POST, PUT, PATCH, DELETE
// GET = Buscar recurso do backend
// POST = Sempre para criar uma recurso do backend
// PUT = Atualizar um recurso no backend
// PATCH = Atualizar uma informação única/específica no backend => PUT atuliza mais de uma coisa ao mesmo tempo, PATCH atualização específica
// DELETE = deletar um recurso no back-end

// GET /users => Buscando usuários no back-end
// POST /user => Criando um usuário no back-end


const server = http.createServer((req, res) => {

    const { method, url } = req;

    if(method === "GET" && url === '/users') {
        // Early return -> se bater no return nada abaixo vai ser executado
        return res.end("Listagem de usuários")
    }

    if(method === 'POST' && url === "/users") {
        return res.end("Criação de usuários")
    }

    return res.end('Hello, Ignite!');
});

server.listen(3333);