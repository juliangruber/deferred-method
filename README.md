
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
deferred(writer, 'publish');

writer.publish('topic', 'message');
writer.publish('topic', 'message');
writer.publish('topic', 'message');
```

  Since emitting a `"ready"` event is most common, `deferred-method` listens to it by default, unless don't specify your own `ready` function:

```js
deferred(writer, 'publish', writer.once.bind(writer, 'ready'));
```

## Installation

```bash
$ npm install deferred-method
```

## License

  MIT

