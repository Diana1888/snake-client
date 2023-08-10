const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on("connect", () => {
    //handling connection event
    console.log("Successfully connected to game server");

    //sending name to the server
    conn.write("Name: DIN");


    //continually move the snake up every 5 seconds
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 2000)

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = { connect };