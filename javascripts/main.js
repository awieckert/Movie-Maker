const startApplication = require('./dataGatekeeper.js');
const disable = require('./disabled.js');

startApplication();
disable.disableButtons();

console.log('starApplication: ', startApplication);
