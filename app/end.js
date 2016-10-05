'use strict';

/**
 * module dependencies
 */
var random = require( 'lodash.random' );
var yosay = require( 'yosay' );

/**
 * @this Base
 * @returns {undefined}
 */
function end() {
  var quotes = [
    'be not afraid of greatness: some are born great, some achieve greatness, ' +
    'and some have greatness thrust upon them',
    'the course of true love never did run smooth',
    'to thine own self be true, and it must follow, as the night the day, ' +
    'thou canst not then be false to any man'
  ];

  this.log();
  this.log( yosay( quotes[ random( 0, 2 ) ] ) );
}

module.exports = end;
