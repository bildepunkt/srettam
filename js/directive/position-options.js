'use strict';

var jQuery = require('jquery');
var angular = require('angular')

/**
 * @directive positionOptions
 * @author Chris Peters
 */
module.exports = function() {
    return function(scope, element, attrs) {
        var $el = jQuery(element),
            $optionMenus,
            $optionMenu;

        var listScrollHandler = function() {
            $optionMenus = $optionMenus || $el.find('.options > ul');
            $optionMenus.each(function() {
                $optionMenu = jQuery(this);
                $optionMenu.css({ top: $optionMenu.parent().offset().top + 'px' });
            });
        };

        $el.bind('scroll', listScrollHandler);
    };
};
