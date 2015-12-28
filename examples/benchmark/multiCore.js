var ac = require('../../index');
var cpuCores = require('os').cpus().length;
var worker = __dirname + '/clusterWorker.js';
var list = [];

for (var i = 0; i <= 1000; i++) { list.push(i); }

ac.eachCore(list, cpuCores, worker, function (err) {
  if (err) console.log(err)
  process.exit(0);
});