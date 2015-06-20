'use strict';

var jQuery;
var $ = jQuery = require('jquery');
var angular = require('angular');

/**
 * Welcome to the Matters App!
 * This web application allows users to browse, delete, and close client
 * matters. It is also equipped with search and filtering cabibilities.
 * Enjoy!!!
 *
 * @module mattersApp
 * @author Chris Peters
 */
var app = angular.module('mattersApp', []);

require('./directive');
require('./service')
require('./controller');
