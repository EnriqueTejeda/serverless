'use strict';

const ensureString = require('type/string/ensure');
const ServerlessError = require('../../../serverless-error');

module.exports = {
  resolve: ({ address, options }) => {
    if (!address) {
      throw new ServerlessError(
        'Missing address argument in variable "opt" source',
        'MISSING_ENV_SOURCE_ADDRESS'
      );
    }
    address = ensureString(address, {
      Error: ServerlessError,
      errorMessage: 'Non-string address argument in variable "opt" source: %v',
    });

    return options[address] || null;
  },
};
