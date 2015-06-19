'use strict';

var angular = require('angular');

/**
 * @module SidebarController
 * @author Chris Peters
 */
module.exports = function($scope, $http) {
    /**
     * initialize module
     * @method init
     */
    var init = function(url) {
        $http.get(url).
            success(function(data) {
                $scope.clients = angular.fromJson(data);
                $scope.loaded = true;
            }).
            error(function(data, status) {
                $scope.error = true;
                $scope.loaded = true;
                return;
            });
    };

    init('data/matters.json');
};
