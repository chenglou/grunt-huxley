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
          action: ''
        },
        src: ['./tests/1 only one task out of two']
      },
      errors: {
        src: ['./tests/**']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['huxley:all', 'huxley:errors']);
};
