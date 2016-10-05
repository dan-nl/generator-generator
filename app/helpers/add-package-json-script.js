'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @param {Base} generator
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var extend_content = { scripts: {} };
  var new_content;
  var package_json;

  package_json = loadJson( generator.destinationPath( 'package.json' ), { sync: true } );
  generator.log( chalk.cyan( 'config' ) );

  if ( !package_json.scripts ) {
    package_json.scripts = {};
  }

  if ( package_json.scripts[ 'generator' ] ) {
    generator.log( chalk.green( '   script already exists' ) + ' generator' );
  } else {
    extend_content.scripts[ 'generator' ] = 'echo \"Example add of npm script\" && exit 0';
    generator.log( chalk.green( '   create script' ) + ' generator' );
  }

  new_content = extend( {}, package_json, extend_content );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;
