'use strict';

var environments = require('./plaidEnvironments.js');
var Client = require('./PlaidClient.js');

var isPlaidError = function(err) {
  return (
    err != null &&
    typeof err.error_type === 'string' &&
    typeof err.error_code === 'string' &&
    typeof err.error_message === 'string' &&
    (err.display_message === null ||
      typeof err.display_message === 'string')
  );
};

module.exports = {
  environments: environments,
  isPlaidError: isPlaidError,
  Client: Client
};
