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
    var serverUrl = this.options().server;
    var path = this.filesSrc;

    if (this.options().driver)
      huxley.injectDriver(this.options().driver());

    var done = this.async();
    function doneCallback(err) {
      if (err) {
        grunt.log.error(err);
        return done(false);
      }
      done();
    }
    switch (this.options().action) {
      case 'record':
        huxley.recordTasks(browser, serverUrl, path, doneCallback);
        break;
      case 'update':
        huxley.playbackTasksAndSaveScreenshots(browser, serverUrl, path, doneCallback);
        break;
      default:
        huxley.playbackTasksAndCompareScreenshots(browser, serverUrl, path, doneCallback);
    }
  });
};
