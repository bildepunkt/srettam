'use strict';

var angular = require('angular');

/**
 * handles user interaction with matter items
 *
 * @controller MatterController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope, mattersService) {
    $scope.optionsActive = false;

    /**
     * conditionally emits `matter:closeoptions` and toggles a
     * matter's options menu visibility
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
     * emits `rootScope`-level event with selected data
     *
     * @method contentClick
     */
    $scope.contentClick = function(matter) {
        $rootScope.$emit('matter:click', matter);
    };

    /**
     * removes hidden class on sidebar->matter AND content->matter via
     * `$scope.matter`
     *
     * @method close
     */
    $scope.close = function() {
        $scope.matter.status = 'closed';
    };

    /**
     * removes hidden class on sidebar->matter AND content->matter via
     * `$scope.matter`
     *
     * @method close
     */
    $scope.delete = function(id) {
        mattersService.removeItemById(parseInt(id, 10));
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
