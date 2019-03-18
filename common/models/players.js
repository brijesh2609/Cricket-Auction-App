'use strict';

module.exports = function (Players) {

  Players.byId = function (id, callback) {
    Players.find({
      where: {
        player_id: id
      },
      include: "teams"
    },
      function (err, player) {
        callback(err, player);
      });
  };

  Players.remoteMethod('byId', {
    http: {
      path: '/id/:id',
      verb: 'get'
    },
    returns: {
      arg: 'success',
      type: 'object'
    },
    accepts: [
      { arg: 'id', type: 'string' },
    ]
  });

  Players.reset = function (callback) {
    Players.updateAll({}, {
      "status": null,
      "sp": null,
      "teamsId": ""
    },
      function (err, player) {
        callback(err, true);
      });
  };

  Players.remoteMethod('reset', {
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
