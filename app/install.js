'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @this Base
 * @returns {undefined}
 */
function install() {
  var modules = [ 'yeoman-generator' ];

  if ( !this.options.PromptAnswers.get( 'create-generator' ) ) {
    return;
  }

  this.log( chalk.cyan( 'install' ) );
  this.log( chalk.green( '   package' ) + ' yeoman-generator' );
  this.npmInstall( modules, { 'save': true } );
}

module.exports = install;
