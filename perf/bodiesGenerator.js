var Body = require('ngraph.physics.primitives').Body;
module.exports = function(count) {
  var bodies = [];
  var random = require('ngraph.random').random(42);
  for(var i = 0; i < count; ++i) {
    bodies.push(createNewBody(random, count * 2));
  }
  return bodies;
};

function createNewBody(random, max){
  var body = new Body();
  body.force.x = random.nextDouble();
  body.force.y = random.nextDouble();
  body.pos.x = (max - random.next(max)) * 0.5;
  body.pos.y = (max - random.next(max)) * 0.5;
  return body;
}
