'use strict';

var fs = require( 'fs' );
var path = require( 'path' );

/**
 * @this Base
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromptAnswers.get( 'create-generator' ) ) {
    return;
  }

  this.fs.copy(
    path.join( __dirname, '**/*' ),
    this.destinationPath( 'app' )
  );
}

module.exports = writing;
