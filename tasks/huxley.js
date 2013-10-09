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
    var browser = this.options.browser;
    var path;
    if (this.files[0] && this.files[0].src) {
      path = this.files[0].src;
    }

    switch (this.options.action) {
      case 'record':
        huxley.recordTasks(browser);
        return true;
      case 'update':
        huxley.playbackTasksAndSaveScreenshots(browser, path);
        return true;
      default:
        huxley.playbackTasksAndCompareScrenshots(browser, path);
        return true;
    }
  });
};
