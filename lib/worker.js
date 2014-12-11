var iterator = require(process.env.workerPath);

// Handle master's communication
var handle = {
  // call iterator
  job: function (msg) {
    iterator(msg.item, function (err) {
      var type = err? 'error' : 'requestItem';
      process.send({type: type, err: err});
    });
  }
};

// Request first item
process.send({type: 'requestItem'});

// handle master's messages
process.on('message', function(msg) {
  var fn = msg.type;
  handle[fn](msg);
});