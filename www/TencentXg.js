var argscheck = require('cordova/argscheck'),
exec = require('cordova/exec');

var exports = {};

exports.getMessage = function (success, error) {
  exec(success, error, "TencentXg", "getLMessage", []);
};

module.exports = exports;

