'use strict';

/**
 * displays clicked matter items
 *
 * @controller ContentController
 * @author Chris Peters
 */
module.exports = function($scope, $rootScope) {

    /**
     * injects clicked matter's data into scope
     *
     * @method contentClickHandler
     */
    var contentClickHandler = function(e, data) {
        $scope.matter = data;
    };

    $rootScope.$on('matter:contentclick', contentClickHandler);
};
