require.config({
  "config": {
    "*": {
      "version": (new Date()).getTime(),
      "environment": "development"
    }
  },
  "baseUrl": "scripts/",
  "paths": {
  //  "text": "../bower_components/text/text",
  //  "knockout": "../bower_components/knockout.js/knockout",
  //  "knockout-amd-helpers": "../bower_components/knockout-amd-helpers/build/knockout-amd-helpers",
  //  "pajamas": "../bower_components/pajamas/src/pajamas",
  //  "q": "../bower_components/q/q"
  },
  "urlArgs": "version=" +  (new Date()).getTime()
});

// require(["app"]);
