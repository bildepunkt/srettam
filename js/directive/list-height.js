'use strict';

var jQuery = require('jquery');

/**
 * ensures that the list container's height is the difference between the
 * viewport and the header
 *
 * @directive maListHeight
 * @author Chris Peters
 */
module.exports = function($window) {
    return function(scope, element, attrs) {
        var $win = jQuery($window);
        var $el = jQuery(element);

        /**
         * @method windowResizeHandler
         */
        var windowResizeHandler = function() {
            $el.css({ height: (jQuery(this).height() - $el.offset().top) + 'px' });
        };

        $win.bind('resize', windowResizeHandler);
        $win.trigger('resize');
    };
};
