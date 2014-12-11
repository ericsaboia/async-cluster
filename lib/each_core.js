var cluster = require('cluster');

cluster.setupMaster({
  exec: __dirname + "/worker.js",
});

module.exports = function (list, limit, workerPath, callback) {
  callback = callback || function () {};
  
  if (!list.length) return callback();

  for (i = 0; i < limit; i++) {
    fork();
  }

  var handle = {
    // Gets next item and pass it to the worker or kills it.
    requestItem: function (worker) {
      var nextItem = list.shift();
      nextItem? worker.send({ type: 'job', item: nextItem }) : worker.kill();
    },

    // Returns error to callback
    error: function  (worker, msg) {
     sendResult(msg.err);
    }
  };

  function fork () {
    var worker = cluster.fork({workerPath: workerPath});

    // handle worker's messages
    worker.on('message', function (msg) {
      var fn = msg.type;
      handle[fn](worker, msg);
    });

    // handle worker's exit
    worker.on('exit', function(code, signal) {
      if (!Object.keys(cluster.workers).length) sendResult();
    });
  }

  function sendResult (err) {
    callback(err);
    callback = function () {};
  }
}
