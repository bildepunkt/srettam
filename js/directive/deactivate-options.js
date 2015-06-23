'use strict';

/**
 * handlers interaction with the body
 *
 * @directive maCloseOptions
 * @author Chris Peters
 */
module.exports = function($document) {
    return function(scope, element, attrs) {
        $document.bind('click', function() {
            scope.$apply(scope.deactivate);
        });
    };
};
