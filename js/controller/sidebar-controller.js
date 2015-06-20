'use strict';

var angular = require('angular');

/**
 * @controller SidebarController
 * @author Chris Peters
 */
module.exports = function($scope, $http, mattersService) {
    /**
     * initialize module
     * @method init
     */
    this.init = function(url) {
        $http.get(url).
            success(function(data) {
                mattersService.setClients(angular.fromJson(data));
                $scope.clients = mattersService.getClients();
                $scope.loaded = true;
            }).
            error(function(data, status) {
                $scope.error = true;
                $scope.loaded = true;
                return;
            });
    };

    this.init('data/matters.json');
};
