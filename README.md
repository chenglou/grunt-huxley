# Grunt-huxley

Grunt task runner for [node-huxley](https://github.com/chenglou/node-huxley).

- Records your actions as you browse.
- Takes screenshots.
- Compares new screenshots against the old ones and checks for differences.

## Installation

```
npm install grunt-huxley
```

[Selenium Server](http://docs.seleniumhq.org/download/) is used to automate the recorded browser actions. If you already have it, skip this. Don't have it and don't want the hassle of managing it? Download the [node wrapper](https://github.com/eugeneware/selenium-server) instead.

## API

If you're already familiar with [node-huxley](https://github.com/chenglou/node-huxley), the API takes only two minutes to get. If not, check out node-huxley first.

### Options

#### action

One of `record`, `playback` and `update`. Default is `playback`.

... That's all.

For source files, specify them the usual [grunt way](http://gruntjs.com/configuring-tasks#files).

### Example

```js
module.exports = function(grunt) {
  grunt.initConfig({
    huxley: {
      all: {
        options: {
          action: 'update'
        },
        src: ['./folderInWhichTheHuxleyfileJsonResides', 
              '/folder2WithNestedFolders/**']
      }
  });

  grunt.loadNpmTasks('grunt-huxley');

  grunt.registerTask('default', ['huxley:all']);
};
```
