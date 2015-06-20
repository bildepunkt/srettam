'use strict';

var app = require('angular').module('mattersApp');

/**
 * register controllers
 */
app.controller('SidebarController', require('./sidebar'));
app.controller('MatterController', require('./matter'));
app.controller('ContentController', require('./content'));
