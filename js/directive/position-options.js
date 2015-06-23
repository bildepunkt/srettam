'use strict';

var jQuery = require('jquery');

/**
 * offsets the options menu position based on list container's scroll top
 * 
 * @directive maPositionOptions
 * @author Chris Peters
 */
module.exports = function($window) {
    return function(scope, element, attrs) {
        var $el = jQuery(element),
            $win = jQuery($window),
            optionsWidth = 236,
            parentOffset,
            $parent,
            $optionMenus,
            $optionMenu;

        /**
         * @method listScrollHandler
         */
        var listScrollHandler = function() {
            $optionMenus = $optionMenus || $el.find('.options > ul');
            $optionMenus.each(function() {
                $optionMenu = jQuery(this);
                $parent = $optionMenu.parent();
                parentOffset = $parent.offset();

                $optionMenu.css({
                    top: parentOffset.top + 'px',
                    left: $win.width() < $el.width() + optionsWidth ?
                        parentOffset.left - optionsWidth + $parent.width() + 'px' :
                        parentOffset.left + 'px'
                });
            });
        };

        $el.bind('scroll', listScrollHandler);

        scope.$on('matter:openoptions', listScrollHandler);
    };
};
