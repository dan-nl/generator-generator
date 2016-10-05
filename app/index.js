'use strict';

var constructor = require( './constructor' );
var generators = require( 'yeoman-generator' );
var generator = {};

/**
 * remove any of these functions, which are not needed for this generator
 */
generator.constructor = function () {
  constructor.apply( this, arguments );
};

generator.initializing = require( './initializing' );
generator.prompting = require( './prompting' );
generator.configuring = require( './configuring' );
generator.default = require( './default' );
generator.writing = require( './writing' );
generator.conflicts = require( './conflicts' );
generator.install = require( './install' );
generator.end = require( './end' );

module.exports = generators.Base.extend( generator );
