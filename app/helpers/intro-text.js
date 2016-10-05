'use strict';

/**
 * @type {string}
 */
var intro = [
  '',
  'this generator will create a yeoman generator project by running the following tasks:',
  '',
  '  * npm init',
  '  * create readme.md',
  '  * create license.txt',
  '  * install tap and optionally sinon',
  '  * install coveralls',
  '  * install eslint-config',
  '  * create .travis.yml',
  '  * copy generator app files',
  '',
  'generator workflow:',
  '',
  '  1. gather information regarding your project',
  '  2. configure your project',
  '  3. create & copy templates and files',
  '  4. install npm packages',
  '',
  'you can skip any of these tasks when prompted below'
].join( '\n' );

module.exports = intro;
