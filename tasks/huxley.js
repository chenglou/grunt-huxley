/*
 * grunt-huxley
 * https://github.com/chenglou/grunt-huxley
 *
 * Copyright (c) 2013 chenglou
 * Licensed under the MIT license.
 */

'use strict';

var huxley = require('huxley');

module.exports = function(grunt) {
  grunt.registerMultiTask('huxley', 'Grunt task for node-huxley.', function() {
    var gruntOpts = this.options();
    var opts = {
      globs: gruntOpts.globs || this.filesSrc,
      browserName: gruntOpts.browserName,
      serverUrl: gruntOpts.serverUrl,
      taskName: gruntOpts.taskName,
      injectedDriver: gruntOpts.injectedDriver,
    };

    var done = this.async();
    huxley[gruntOpts.action](opts).then(function() {
      done();
    })
    .catch(function(err) {
      grunt.log.error(err);
      done(err);
    });
  });
};
