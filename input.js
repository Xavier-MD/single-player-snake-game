const { textInterpreter } = require("./constants");

let connection;

//listen for keyboard input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(textInterpreter);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//keybinds
const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  } if (key === 'w') {
    connection.write("Move: up");
  } if (key === 'a') {
    connection.write("Move: left");
  } if (key === 's') {
    connection.write("Move: down");
  } if (key === 'd') {
    connection.write("Move: right");
  } if (key === 'q') {
    connection.write("Say: Got You!");
  } if (key === 'e') {
    connection.write("Say: Haha!");
  }
};

// conn.on('connect', () => {
//   conn.write("Move: up");
// });


module.exports = {
  setupInput,
};