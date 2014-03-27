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

#### browser
Either "firefox" or "chrome".

For source files, specify them the usual [grunt way](http://gruntjs.com/configuring-tasks#files).

#### server
Used to run Huxley on a remote Selenium server.

Defaults to Selenium's defaults for each browser:

  - Chrome: 'http://localhost:9515'
  - Firefox: 'http://localhost:4444/wd/hub'

#### driver
You can specify your own driver. Create anonymous function which returns your driver.

### Examples

#### Locally:

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

#### Remotely:

```js
module.exports = function(grunt) {
  grunt.initConfig({
    huxley: {
      all: {
        options: {
          action: 'playback',
          browser: 'firefox',
          server: 'http://somedomainName:4440/wd/hub'
        },
        src: ['./folderInWhichTheHuxleyfileJsonResides',
              '/folder2WithNestedFolders/**']
      }
  });

  grunt.loadNpmTasks('grunt-huxley');

  grunt.registerTask('default', ['huxley:all']);
};
```

#### Third-Party Driver, e.g. [BrowserStack](http://www.browserstack.com):

```js
var webdriver = require('browserstack-webdriver');

module.exports = function(grunt) {
  grunt.initConfig({
    huxley: {
      all: {
        options: {
          action: 'playback',
          driver: function () {
            var capabilities = {
              'browserName' : 'firefox',
              'browserstack.user' : 'USERNAME',
              'browserstack.key' : 'ACCESS_KEY'
            }

            return new webdriver.Builder().
              usingServer('http://hub.browserstack.com/wd/hub').
              withCapabilities(capabilities).
              build();
          }
        },
        src: ['./folderInWhichTheHuxleyfileJsonResides',
              '/folder2WithNestedFolders/**']
      }
  });

  grunt.loadNpmTasks('grunt-huxley');

  grunt.registerTask('default', ['huxley:all']);
};
```
