const express = require('express');
const app = express();
const http = require('http');

const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const users = {};

io.on('connection', (socket) => {
    socket.on('set nickname', (name) => {
        users[socket.id] = name?.trim() || 'Anon';
        io.emit('users', Object.values(users));
        socket.broadcast.emit('msg', `${users[socket.id]} joined`);
    });

    socket.on('chat', (msg) => {
        const nickname = users[socket.id] || 'Anon';
        io.emit('msg', `${nickname}: ${msg}`);
    });

    socket.on('disconnect', () => {
        const nickname = users[socket.id];
        if (nickname) {
            socket.broadcast.emit('msg', `${nickname} left`);
            delete users[socket.id];
            io.emit('users', Object.values(users));
        }
    });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));