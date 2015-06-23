'use strict';

var jQuery = require('jquery');

/**
 * offsets the options menu position based on list container's scroll top
 * 
 * @directive maPositionOptions
 * @author Chris Peters
 */
module.exports = function() {
    return function(scope, element, attrs) {
        var $el = jQuery(element),
            $optionMenus,
            $optionMenu;

        /**
         * @method listScrollHandler
         */
        var listScrollHandler = function() {
            $optionMenus = $optionMenus || $el.find('.options > ul');
            $optionMenus.each(function() {
                $optionMenu = jQuery(this);
                $optionMenu.css({ top: $optionMenu.parent().offset().top + 'px' });
            });
        };

        $el.bind('scroll', listScrollHandler);

        scope.$on('matter:openoptions', listScrollHandler);
    };
};
