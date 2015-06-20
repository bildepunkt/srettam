'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var angular = require('angular');

/**
 * @module MattersApp
 * @author Chris Peters
 */
var app = angular.module('mattersApp', []);

require('./directive');
require('./service')
require('./controller');
