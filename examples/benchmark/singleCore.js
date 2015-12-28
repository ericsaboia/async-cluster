var async = require('async');
var worker = require(__dirname + '/clusterWorker.js');
var list = [];

for (var i = 0; i <= 1000; i++) { list.push(i); }

async.eachLimit(list, 4, worker, function (err) {
  if (err) console.log(err)
  process.exit(0);
});