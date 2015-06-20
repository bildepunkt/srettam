'use strict';

var angular = require('angular');

/**
 * @controller MatterController
 * @author Chris Peters
 */
module.exports = function($scope) {
    $scope.active = false;

    /**
     * toggles a matter's options menu
     * @method optionsClick
     */
    $scope.optionsClick = function() {
        $scope.active = $scope.active ? false : true;
    };

    $scope.$on('foo', function(data) {
        console.log(data);
    });
};
