var blessed = require('blessed');


// Create a screen object.
var screen = blessed.screen({
  smartCSR: true
});

var ui = require('./ui')(screen);

screen.title = 'my window title';



// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});


screen.append(ui.box)

// Render the screen.
screen.render();