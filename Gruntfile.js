module.exports = function (grunt) {
  "use strict";

  // load all grunt tasks:
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: ["dist"],
    replace: {
      dist: {
        src: ["dist/index.html"],
        dest: "dist/index.html",
        replacements: [{ 
          from: "<script data-main=\"main.dev\" src=\"bower_components/requirejs/require.js\"></script>",
          to: "<script src=\"main.min.js\"></script>"
        }, {
          from: "<script src=\"//localhost:35729/livereload.js\"></script>",
          to: ""
        }]
      }
    },
    watch: {
      options: {
        spawn: false
      },
      dev: {
        options: {
        },
        files: ["Gruntfile.js", "dev/main.dev.js", "dev/scripts/**/*.js", "test/**/*.js", "dev/**/*.html"],
        tasks: ["default"]
      }
    },
    karma: {
      options: {
        configFile: "karma.conf.js"
      },
      unit: {
        exclude: ["test/integration/**/*.js"],
        singleRun: false,
        browsers: ['Chrome']
      },
      integration: {
        exclude: ["test/unit/**/*.js"]
      }
    },
  });

  grunt.registerTask("default", ["test-unit"]);
  grunt.registerTask("test-unit", ["karma:unit"]);
};
