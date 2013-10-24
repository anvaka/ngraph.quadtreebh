ngraph.quadtreebh
=================

Implementation of Barnes-Hut N-Body simulation in Javascript.

Reference
---------
1. [Fast Hierarchical Methods for the N-body Problem](http://www.eecs.berkeley.edu/~demmel/cs267/lecture26/lecture26.html) - one of the best explanations of Barnes-Hut method by James Demmel.
2. [Wikipedia article](http://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation) General introduction into the problem

Usage
=====
I'm still working on API and it might be changed in future. 
``` js
var Body = require('ngraph.physics.primitives').Body;
var createQuadTree = require('ngraph.quadtreebh');

var quadTree = createQuadTree();

```
