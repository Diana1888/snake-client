const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    //handling connection event
    console.log("Successfully connected to game server");

    //sending name to the server
    conn.write(NAME);

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = { connect };