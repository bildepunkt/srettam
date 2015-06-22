'use strict';

var angular = require('angular');

/**
 * fetches and gives matters data to mattersService
 *
 * @controller SidebarController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope, $http, mattersService) {
    $scope.allChecked = false;

    /**
     * emit root level event to check all matters checkboxes.
     * $scope.allChecked is a boolean based on the selectAll checkbox's state.
     * @method checkAll
     */
    $scope.checkAll = function() {
        $scope.$broadcast('sidebar:checkall', $scope.allChecked);
    };

    /**
     * @method init
     * @param {string} url
     */
    var init = function(url) {
        $http.get(url).
            success(function(data) {
                mattersService.setMatters(angular.fromJson(data));
                $scope.clients = mattersService.getMatters();
                $scope.loaded = true;
            }).
            error(function(data, status) {
                $scope.error = true;
                $scope.loaded = true;
            });
    };

    init('data/matters.json');
};
