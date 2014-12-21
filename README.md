async-cluster
=============

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
