'use strict';

var angular = require('angular');

/**
 * provides matters data to controllers
 *
 * @service mattersService
 * @author Chris Peters
 */
module.exports = function() {
    var matters;

    return {
        /**
         * #method setClients
         * @param {array} _matters
         */
        setMatters: function(_matters) {
            matters = _matters;
        },

        /**
         * #method getMatters
         * @return {array}
         */
        getMatters: function() {
            return matters;
        },

        getById: function(id) {
            angular.forEach(matters, function(matter) {
                
            });
        }
    };
};