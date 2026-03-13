const express = require("express");
const app = express();
const http = require("http");

//standard way of creating a server with express and socket.io
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  io.emit("connection", "a user connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg); //broadcast the message to all clients
    socket.on("typing", (name) => {//typing...
      socket.broadcast.emit("new user", name + " is typing..."); //broadcast to all clients except the one who is typing
    });
  });
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
