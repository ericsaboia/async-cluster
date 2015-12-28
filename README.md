async-cluster
=============

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems users can use [Cluster](https://nodejs.org/api/cluster.html).

This module uses Cluster to perform iterations using `n` cores in parallel. Which can drastically decrease the time spent to perform high intensity CPU operations.

## Benchmark

Benchmark using `time` to measure the amount of seconds spent to finish the [operation](https://github.com/ericsaboia/async-cluster/blob/master/examples/benchmark/worker.js).

Performed using a MacBook Pro with Intel i7 2.5 GHz @ 8 Cores.

files written | [singleCore.js](https://github.com/ericsaboia/async-cluster/blob/master/examples/benchmark/singleCore.js) | [multiCore.js](https://github.com/ericsaboia/async-cluster/blob/master/examples/benchmark/multiCore.js)
--------------| -------------- | ------------
100           | 6.569          | 1.372
500           | 32.600         | 6.442
1000          | 65.84          | 12.653
2000          | 133.90         | 26.217
4000          | 268.92         | 56.003

## Install

To install the most recent release from npm, run:

    npm install async-cluster

## Example

**Master**

```javascript
var ac = require('async-cluster');
var cpuCores = require('os').cpus().length;
var worker = __dirname+'/worker';

ac.eachCore(list, cpuCores, worker, callback);
```

**Worker**

```javascript
module.exports = function(item, callback) {
  ...
  callback();
};
