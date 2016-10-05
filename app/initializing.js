'use strict';

/**
 * module dependencies
 */
var PromptAnswers = require( 'yeoman-prompting-helpers' ).PromptAnswers;

/**
 * @this Base
 * @returns {undefined}
 */
function initializing() {
  this.options.PromptAnswers = this.options.PromptAnswers || new PromptAnswers();

  this.composeWith(
    'npm-init',
    { options: { asciiArt: this.options.asciiArt } },
    { local: require.resolve( 'generator-npm-init' ) }
  );

  this.composeWith(
    'readme',
    { options: { asciiArt: this.options.asciiArt,PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-readme' ) }
  );

  this.composeWith(
    'license',
    { options: { asciiArt: this.options.asciiArt, PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-license' ) }
  );

  this.composeWith(
    'tap',
    { options: { asciiArt: this.options.asciiArt, PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-tap' ) }
  );

  this.composeWith(
    'coveralls',
    { options: { asciiArt: this.options.asciiArt, PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-coveralls' ) }
  );

  this.composeWith(
    'eslint-config',
    { options: { asciiArt: this.options.asciiArt } },
    { local: require.resolve( 'generator-eslint-config' ) }
  );

  this.composeWith(
    'travis',
    { options: { asciiArt: this.options.asciiArt } },
    { local: require.resolve( 'generator-travis' ) }
  );
}

module.exports = initializing;
