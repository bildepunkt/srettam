'use strict';

/**
 * displays clicked matter items
 *
 * @controller ContentController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope) {
    $scope.sidebarActive = true;

    /**
     * injects clicked matter's data into scope
     *
     * @method contentClickHandler
     */
    var contentClickHandler = function(e, data) {
        $scope.matter = data;
    };

    /**
     * applies class to match sidebar's margin on active toggle
     *
     * @method sidebarToggleHandler
     */
    var sidebarToggleHandler = function(e, data) {
        $scope.sidebarActive = data;
    };

    $rootScope.$on('matter:contentclick', contentClickHandler);
    $rootScope.$on('sidebar:toggle', sidebarToggleHandler);
};
