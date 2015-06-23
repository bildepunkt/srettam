'use strict';

var app = require('angular').module('mattersApp');

/**
 * register directives
 */
app.directive('maDeactivateOptions', require('./deactivate-options'));
app.directive('maPositionOptions', require('./position-options'));
app.directive('maListHeight', require('./list-height'));
