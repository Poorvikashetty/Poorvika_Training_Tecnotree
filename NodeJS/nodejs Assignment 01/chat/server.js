const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(1080, () => {
  console.log('Server is running on port 1080');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user has connected');

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log('A user has joined room:', room);
  });

  socket.on('sendMessage', (data) => {
    io.to(data.room).emit('newMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('A user has disconnected');
  });
});