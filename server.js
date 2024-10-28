const { Server } = require('socket.io');
const io = new Server();
io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  const broadcastMessage = (message) => {
    io.emit('message', message);
  };