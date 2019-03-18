'use strict';

module.exports = function(Teams) {
    Teams.reset = function (callback) {
        Teams.updateAll({}, {
          budget: 1300
        },
          function (err, player) {
            callback(err, true);
          });
      };
    
      Teams.remoteMethod('reset', {
        http: {
          path: '/reset',
          verb: 'get'
        },
        returns: {
          arg: 'success',
          type: 'boolean'
        }
      });
};
