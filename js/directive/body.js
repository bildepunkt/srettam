'use strict';

var jQuery = require('jquery');

/**
 * handlers interaction with the body
 *
 * @directive maBody
 * @author Chris Peters
 */
module.exports = function() {
    return function(scope, element, attrs) {
        var $el = jQuery(element);

        /**
         * @method bodyClickHandler
         */
        var bodyClickHandler = function() {
            scope.$broadcast('body:click');
        };

        $el.bind('click', bodyClickHandler);
    };
};
