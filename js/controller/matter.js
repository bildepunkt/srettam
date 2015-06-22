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
     * conditionally emits `matter:closeoptions` to ALL matters items and
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
     * removes hidden class on sidebar->matter AND content->matter via
     * `$scope.matter`; and emit event to position options menu (b/c list
     * height has changed)
     *
     * @method close
     */
    $scope.close = function() {
        $scope.matter.status = 'closed';
        $scope.$emit('matter:deleteorclose');
    };

    /**
     * remove item from `mattersService.matters` array; and emit event to
     * position options menu (b/c list height has changed)
     *
     * @method close
     */
    $scope.delete = function(id) {
        mattersService.removeItemById(parseInt(id, 10));
        $scope.$emit('matter:deleteorclose');
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

    $scope.$on('sidebar:checkall', checkAllHandler);
    $rootScope.$on('matter:closeoptions', closeOptionsHandler);
};
