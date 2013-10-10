/*
 * grunt-huxley
 * https://github.com/chenglou/grunt-huxley
 *
 * Copyright (c) 2013 chenglou
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    huxley: {
      all: {
        options: {
          action: 'playback'
        },
        src: ['./tests/**/']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['huxley']);
};
