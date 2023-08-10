// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //adding event listener from user input
  stdin.on("data", handleUserInput);

  return stdin;
};

//function that terminates the game
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

// setupInput();

module.exports = {  setupInput };