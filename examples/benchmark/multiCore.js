var ac = require('../../index');
var cpuCores = require('os').cpus().length;
var worker = __dirname + '/worker.js';
var repeatTimes = process.argv[2] || 1000;
var list = [];

for (var i = 0; i <= repeatTimes; i++) { list.push(i); }

ac.eachCore(list, cpuCores, worker, function (err) {
  if (err) console.log(err)
  process.exit(0);
});