
# deferred-method

  Queue method invocations until something is ready

## Example

  Instead of having to do:

```js
var nsq = require('nsq.js');

var writer = nsq.writer();

writer.once('ready', function(){
  writer.publish('topic', 'message');
  writer.publish('topic', 'message');
  writer.publish('topic', 'message');
});
```

  you can do this:

```js
var deferred = require('deferred-method');
var nsq = require('nsq.js');

var writer = nsq.writer();
deferred(writer, 'publish', writer.once.bind(writer, 'ready'));

writer.publish('topic', 'message');
```

  Since emitting a `"ready"` event is most common, `deferred-method` listens to it if you don't specify anything, so you can simply do:

```js
deferred(writer, 'publish');
```

## Installation

```bash
$ npm install deferred-method
```

## License

  MIT

