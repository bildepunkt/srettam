'use strict';

var angular = require('angular');

/**
 * handles user interaction with matter items
 *
 * @controller MatterController
 * @author Chris Peters
 */
module.exports = function($scope) {
    $scope.active = false;

    /**
     * toggles a matter's options menu visibility
     *
     * @method optionsClick
     */
    $scope.optionsClick = function() {
        $scope.active = $scope.active ? false : true;
    };

    $scope.$on('foo', function(data) {
        console.log(data);
    });
};
