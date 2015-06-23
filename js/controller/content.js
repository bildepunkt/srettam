'use strict';

/**
 * displays clicked matter items
 *
 * @controller ContentController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope) {

    $rootScope.$on('matter:contentclick', function(e, data) {
        $scope.matter = data;
    });
};
