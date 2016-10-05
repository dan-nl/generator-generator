'use strict';

/**
 * module dependencies
 */
var displayGeneratorIntro = require( 'yeoman-helpers' ).displayGeneratorIntro;
var generator_ascii_art = require( './helpers/ascii-art' );
var generator_intro_text = require( './helpers/intro-text' );
var prompts = require( './helpers/prompt-create-generator' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @this Base
 * @returns {undefined}
 */
function prompting() {
  var generator = this;

  displayGeneratorIntro(
    this,
    {
      ascii_art: {
        art: generator_ascii_art,
        display: this.options.asciiArt
      },
      intro_text: generator_intro_text
    }
  );

  /**
   * @property {Function} then
   */
  return promptingHelper( this, prompts )
    .then(
      function () {
        if ( !generator.options.PromptAnswers.get( 'create-generator' ) ) {
          process.exit( 0 );
        }
      }
    );
}

module.exports = prompting;
