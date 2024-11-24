﻿const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Página inicial");
    } else if (req.url === "/sobre") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Página Sobre");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Página não encontrada");
    }
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
