var deferred = require('./');
var EventEmitter = require('events').EventEmitter;

// Construct

var obj = new EventEmitter;

obj.method = function(arg){
  console.log('arg', arg, 'state', obj.state);
};

deferred(obj, 'method', obj.once.bind(obj, 'ready'));

// Call

obj.method('arg');

// Ready

obj.state = 'state';
obj.emit('ready');
