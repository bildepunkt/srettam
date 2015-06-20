'use strict';

var app = require('angular').module('mattersApp');

/**
 * register services
 */
app.factory('mattersService', require('./matters'));
