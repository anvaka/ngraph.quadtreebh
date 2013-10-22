var createQuadTree = require('../'),
    createBodies = require('./bodiesGenerator'),
    numberOfBodies = 400000,
    theta = 1.2;

logMessage('Running performance test');
logMessage('Processing...');

var msg = 'Calculating NBody for ' + numberOfBodies + ' bodies. Theta: ' + theta;
var bodies = createBodies(numberOfBodies);
var quadTree = createQuadTree({theta: theta});

var startInit = +new Date();
quadTree.init(bodies);
var initMS = +new Date() - startInit;
logMessage('Creating tree: ' + initMS + 'ms');

var startUpdate = +new Date();
for (var j = 0; j < bodies.length; ++j) {
  quadTree.update(bodies[j]);
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
