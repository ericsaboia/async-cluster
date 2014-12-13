async-cluster
=============

## Install

To install the most recent release from npm, run:

    npm install async-cluster
    

## Example

```javascript
var ac = require('async-cluster');
var cpuCores = require('os').cpus().length;
var workerPath = __dirname+'/worker';

ac.eachCore(channels, cpuCores, workerPath, callback);
```
