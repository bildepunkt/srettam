'use strict';

var angular = require('angular');

/**
 * fetches and gives matters data to mattersService
 *
 * @controller SidebarController
 * @author Chris Peters
 */
module.exports = function($scope, $http, mattersService) {

    /**
     * @method init
     * @param {string} url
     */
    var init = function(url) {
        $http.get(url).
            success(function(data) {
                mattersService.setMatters(angular.fromJson(data));
                $scope.clients = mattersService.getClients();
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
