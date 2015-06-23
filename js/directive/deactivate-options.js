'use strict';

/**
 * deactivates all options menus on document click
 *
 * @directive maDeactivateOptions
 * @author Chris Peters
 */
module.exports = function($document) {
    return function(scope, element, attrs) {
        $document.bind('click', function() {
            scope.$apply(scope.deactivate);
        });
    };
};
