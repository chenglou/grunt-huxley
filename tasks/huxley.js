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
    // grunt auto transforms the glob pattern into an array of src files. Huxley
    // doesn't need this since it takes care of doing that itself. So directly
    // access the raw src string here. Only the first one's taken
    // TODO: change Huxley's behavior to match this?
    var path = this.data.src ? this.data.src[0] : null;

    var done = this.async();
    switch (this.options().action) {
      case 'record':
        huxley.recordTasks(browser, path);
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
