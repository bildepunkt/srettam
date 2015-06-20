'use strict';

var angular = require('angular');

/**
 * displays clicked matter items
 *
 * @controller ContentController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope) {

    $rootScope.$on('matter:click', function(e, data) {
        $scope.matter = data;
    });
};
