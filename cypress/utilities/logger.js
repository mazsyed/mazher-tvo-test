const fs = require('fs');

const logToFile = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  fs.appendFileSync('test-logs.txt', logMessage, 'utf-8');
};

module.exports = {
  logToFile,
};
