'use strict';

var angular = require('angular');

/**
 * @service mattersService
 * @author Chris Peters
 */
module.exports = function() {
    var clients;

    return {
        setClients: function(_clients) {
            clients = _clients;
        },

        getClients: function() {
            return clients;
        }
    };
};