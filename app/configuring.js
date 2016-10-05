'use strict';

/**
 * module dependencies
 */
var addPackageJsonScript = require( './helpers/add-package-json-script' );
var yosay = require( 'yosay' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;
var prompts = require( './helpers/prompt-continue' );

/**
 * @this Base
 * @returns {undefined}
 */
function configuring() {
  var generator = this;

  if ( !this.options.PromptAnswers.get( 'create-generator' ) ) {
    return;
  }

  this.log(
    yosay(
      'thanks, now i’ve got enough info to configure the generator, ' +
      'copy files & templates, and install any required npm packages'
    )
  );

  return promptingHelper( this, prompts )
    .then(
      function () {
        if ( !generator.options.PromptAnswers.get( 'create-generator-continue' ) ) {
          process.exit( 0 );
        }

        addPackageJsonScript( generator );
      }
    );
}

module.exports = configuring;
