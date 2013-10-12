/*
 * grunt-huxley
 * https://github.com/chenglou/grunt-huxley
 *
 * Copyright (c) 2013 chenglou
 * Licensed under the MIT license.
 */

'use strict';

var huxley = require('huxley');
var exec = require('child_process').exec;

module.exports = function(grunt) {
  grunt.registerMultiTask('huxley', 'Grunt task for node-huxley.', function() {
    var browser = this.options().browser;
    var path = this.filesSrc;

    var done = this.async();
    switch (this.options().action) {
      case 'record':
        huxley.recordTasks(browser, path, done);
      case 'update':
        huxley.playbackTasksAndSaveScreenshots(browser, path, done);
      default:
        huxley.playbackTasksAndCompareScrenshots(browser, path, done);
    }
  });
};
