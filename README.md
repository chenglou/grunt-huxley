# Grunt-huxley

Grunt task runner for [node-huxley](https://github.com/chenglou/node-huxley).

- Records your actions as you browse.
- Takes screenshots.
- Compares new screenshots against the old ones and checks for differences.

## Installation

```
npm install grunt-huxley
```

[Selenium Server](http://docs.seleniumhq.org/download/) is used to automate the recorded browser actions. Don't have it yet? Try the [node wrapper](https://github.com/eugeneware/selenium-server).

## API

If you're already familiar with [node-huxley](https://github.com/chenglou/node-huxley), the API is basically the same: [https://github.com/chenglou/node-huxley/wiki/API](https://github.com/chenglou/node-huxley/wiki/API).

Difference with the official API: instead of `globs`, you can pass them as the standard grunt `src`. There's also the `action` key (one of `writeScreenshots`, `recordTasks`, `compareScreenshots` and `defaultWorkflow`).

### Examples

```js
module.exports = function(grunt) {
  grunt.initConfig({
    huxley: {
      all: {
        options: {
          action: 'defaultWorkflow'
        },
        src: [
          './folder1/Huxleyfile.json',
          '/folder2WithNestedFolders/**/*Huxleyfile.json'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-huxley');
  grunt.registerTask('default', ['huxley:all']);
};
```
