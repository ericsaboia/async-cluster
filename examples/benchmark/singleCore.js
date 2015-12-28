var async = require('async');
var worker = require(__dirname + '/worker.js');
var repeatTimes = process.argv[2] || 1000;
var list = [];

for (var i = 0; i <= repeatTimes; i++) { list.push(i); }

async.eachLimit(list, 4, worker, function (err) {
  if (err) console.log(err)
  process.exit(0);
});