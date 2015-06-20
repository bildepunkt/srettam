'use strict';

var app = require('angular').module('mattersApp');

/**
 * register directives
 */
app.directive('ngPositionOptions', require('./position-options'));
app.directive('ngListHeight', require('./list-height'));
