var karma  = window.__karma__,
    tests  = Object.keys(karma.files).filter(function (file) { return /Spec\.js$/.test(file); }),
    config = {
      "version": (new Date()).getTime(),
      "environment": "test"
    };

require.config({
  "config": {
    "*": config
  },
  "baseUrl": "/base/dev/scripts/",
  "paths": {
  //  "text": "../bower_components/text/text",
  //  "knockout": "../bower_components/knockout.js/knockout",
  //  "knockout-amd-helpers": "../bower_components/knockout-amd-helpers/build/knockout-amd-helpers",
  //  "pajamas": "../bower_components/pajamas/src/pajamas",
  //  "q": "../bower_components/q/q",
  //  "squire": "../bower_components/squire/src/Squire"
  }
});

define("module", [], function () {
  return { config: function () { return config; } };
});

require(tests, function () {
  karma.start();
});
