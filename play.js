const connect = require("./client");

console.log("Connecting ...");
connect();

//listen for keyboard input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//keybinds
const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    if (key === '\u0003'/*Ctrl C*/) {
      process.exit();
    }
  });
};

setupInput();