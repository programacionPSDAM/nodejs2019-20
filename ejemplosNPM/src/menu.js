const menu = require('simple-menu');
 
menu.reset();
 
menu.addText('Main Menu');
menu.addBreak('-', 60);
 
menu.addOption('Print \'Hello World\'', function() {
  console.log('Hello World');
});
 
menu.addBreak('-', 60);
menu.addQuit();
 
menu.init('What would you like to do?');