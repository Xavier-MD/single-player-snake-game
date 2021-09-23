const stdin = process.stdin;

//listen for keyboard input
const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//keybinds
const handleUserInput = function() {
  stdin.on("data", (key) => {
    if (key === '\u0003'/*Ctrl C*/) {
      process.exit();
    }
  });
};

module.exports = setupInput;