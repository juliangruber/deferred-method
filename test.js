var test = require('tape');
var deferred = require('./');
var EventEmitter = require('events').EventEmitter;

test('deferred method', function(t){
  var obj = new EventEmitter;
  obj.method = function(arg){
    t.equal(arg, 'arg');
    t.equal(obj.state, 'state');
    t.end();
  };
  deferred(obj, 'method', obj.once.bind(obj, 'go'));

  obj.method('arg');

  obj.state = 'state';
  obj.emit('go');
});

test('implicit ready', function(t){
  var obj = new EventEmitter;
  obj.method = function(arg){
    t.equal(arg, 'arg');
    t.equal(obj.state, 'state');
    t.end();
  };
  deferred(obj, 'method');

  obj.method('arg');

  obj.state = 'state';
  obj.emit('ready');
});
