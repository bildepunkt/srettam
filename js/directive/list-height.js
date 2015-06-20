'use strict';

var jQuery = require('jquery');
var angular = require('angular');

/**
 * @directive listHeight
 * @author Chris Peters
 */
module.exports = function($window) {
    return function(scope, element, attrs) {
        var $win = jQuery($window);
        var $el = jQuery(element);

        var windowResizeHandler = function() {
            $el.css({ height: (jQuery(this).height() - $el.offset().top) + 'px' })
        };

        $win.bind('resize', windowResizeHandler);
        $win.trigger('resize');
    };
};
