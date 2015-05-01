module.exports = function(obj, name, ready){
  ready = ready || obj.once.bind(obj, 'ready');
  var fn = obj[name];
  var ops = [];
  obj[name] = function(){
    ops.push(arguments);
  };
  ready(function(){
    obj[name] = fn;
    ops.forEach(function(args){
      fn.apply(obj, args);
    });
  });
};

