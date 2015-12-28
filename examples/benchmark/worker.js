var fs = require('fs');

module.exports = function (item, callback) {
  var content = '';
  var result = 0;

  for (var i = 0; i <= 5000000; i++) {
    result += Math.random() * Math.random();
  };

  fs.writeFile(__dirname + '/tmp/' + item + '.txt', result, callback);
}