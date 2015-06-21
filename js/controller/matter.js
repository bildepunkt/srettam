'use strict';

var angular = require('angular');

/**
 * handles user interaction with matter items
 *
 * @controller MatterController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope) {
    $scope.optionsActive = false;

    /**
     * toggles a matter's options menu visibility
     *
     * @method optionsClick
     */
    $scope.optionsClick = function() {
        if (! $scope.optionsActive) {
            $rootScope.$emit('matter:closeoptions')
        }

        $scope.optionsActive = $scope.optionsActive ? false : true;
    };

    /**
     * emits rootScope-level event with selected data
     *
     * @method contentClick
     */
    $scope.contentClick = function(matter) {
        $rootScope.$emit('matter:click', matter);
    };

    /**
     * toggles checkbox check
     *
     * @method checkAllHandler
     */
    var checkAllHandler = function(e, data) {
        $scope.checked = data;
    };

    /**
     * closes all options menus when a menu becomes active
     *
     * @method closeOptionsHandler
     */
    var closeOptionsHandler = function(e, data) {
        $scope.optionsActive = false;
    };

    $rootScope.$on('sidebar:checkall', checkAllHandler);
    $rootScope.$on('matter:closeoptions', closeOptionsHandler);
};
