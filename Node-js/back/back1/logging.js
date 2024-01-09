function log(message) {
  console.log(`${new Date()}: ${message}`);
}

function logNoDate(messagenodate) {
  console.log(messagenodate);
}

module.exports = log;
module.exports.logNoDate = logNoDate;
