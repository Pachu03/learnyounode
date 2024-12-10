let net = require("net");
let df = require("date-format");

let server = net.createServer((socket) => {
  let dt = new Date();
  socket.write(df("yyyy-MM-dd hh:mm", dt) + "\n");
  socket.end();
});

server.listen(process.argv[2]);
