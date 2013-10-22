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
  body.location.x = (max - random.next(max)) * 0.5;
  body.location.y = (max - random.next(max)) * 0.5;
  return body;
}

function Body() {
  this.force = new Vector();
  this.location = new Vector();
  this.mass = 1;
}

function Vector() {
  this.x = 0;
  this.y = 0;
}
