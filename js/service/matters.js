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

        /**
         * returns client and matter indices
         *
         * @method getIndicesById
         * @param {number} id
         * @return {object} indices
         */
        getIndicesById: function(id) {
            var indices = {
                client: null,
                matter: null
            };

            angular.forEach(matters, function(val, key) {
                if (indices.matter !== null) {
                    return false;
                }

                indices.client = key;

                angular.forEach(val.matters, function(val, key) {
                    if (val.id == id) {
                        indices.matter = key;
                        return false;
                    }
                });
            });

            return indices;
        },

        /**
         * remove item from `matters` by id
         *
         * @method removeItemById
         * @param {number} id
         */
        removeItemById: function(id) {
            var indices = this.getIndicesById(id);
            matters[indices.client].matters.splice(indices.matter, 1);
        }
    };
};