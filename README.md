async-cluster
=============

## Install

To install the most recent release from npm, run:

    npm install async-cluster
    

## Example

```javascript
var ac = require('async-cluster');
var cpuCores = require('os').cpus().length;
var worker = __dirname+'/worker';

ac.eachCore(list, cpuCores, worker, callback);
```
