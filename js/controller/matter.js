'use strict';

var angular = require('angular');

/**
 * handles user interaction with matter items
 *
 * @controller MatterController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope) {
    $scope.active = false;

    /**
     * toggles a matter's options menu visibility
     *
     * @method optionsClick
     */
    $scope.optionsClick = function() {
        $scope.active = $scope.active ? false : true;
    };

    /**
     * emits rootScope-level event with selected data
     *
     * @method contentClick
     */
    $scope.contentClick = function(matter) {
        $rootScope.$emit('matter:click', matter);
    };
};
