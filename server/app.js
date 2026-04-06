const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server);

// test route
app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

// socket
io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("message", "Hello from server");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});