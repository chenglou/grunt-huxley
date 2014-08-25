/*
 * grunt-huxley
 * https://github.com/chenglou/grunt-huxley
 *
 * Copyright (c) 2013 chenglou
 * Licensed under the MIT license.
 */

'use strict';

// Just a small test
module.exports = function(grunt) {
  grunt.initConfig({
    huxley: {
      all: {
        options: {
          action: 'recordTasks'
        },
        src: ['./test/Huxleyfile.json']
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['huxley:all']);
};
