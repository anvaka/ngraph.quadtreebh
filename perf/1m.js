var Body = require('ngraph.physics.primitives').Body;

var createQuadTree = require('../'),
    numberOfBodies = 1000000,
    theta = 1.2;

logMessage('Running performance test');
logMessage('Processing...');

var msg = 'Calculating NBody for ' + numberOfBodies + ' bodies. Theta: ' + theta;
var bodies = createBodies(numberOfBodies);
var quadTree = createQuadTree({theta: theta});

var startInit = +new Date();
quadTree.insertBodies(bodies);
var initMS = +new Date() - startInit;
logMessage('Creating tree: ' + initMS + 'ms');

var startUpdate = +new Date();
for (var j = 0; j < bodies.length; ++j) {
  quadTree.updateBodyForce(bodies[j]);
}
var updateMS = +new Date() - startUpdate;
logMessage(msg + '; time: ' + updateMS + 'ms');

function logMessage(msg) {
  if (typeof console !== 'undefined') {
    console.log.apply(console, arguments);
  } else if (typeof print === 'function') {
    print(msg);
  }
}

function createBodies(count) {
  var bodies = [];
  var random = require('ngraph.random').random(42);
  for(var i = 0; i < count; ++i) {
    bodies.push(createNewBody(random, count * 2));
  }
  return bodies;
}

function createNewBody(random, max){
  var body = new Body();
  body.force.x = random.nextDouble();
  body.force.y = random.nextDouble();
  body.pos.x = (max - random.next(max)) * 0.5;
  body.pos.y = (max - random.next(max)) * 0.5;
  return body;
}
