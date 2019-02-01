"use strict";

module.exports = function (grunt) {
    let gruntConf = {
        pkg: grunt.file.readJSON('package.json')
        , webpack: {
            options: {
                mode: 'development'
            },

            main: require('./webpack.config')
        }

        , watch: { // tracks changes of the watched files and rerunns the generation commands for development convenience
            options: {
                livereload: true,
            },

            js: {
                files: [
                    'src/jsx/**/*.jsx',
                    'src/jsx/**/*.js'
                ],
                tasks: ['webpack']
            },

            sass: {
                files: [
                    'src/sass/**/*.scss',
                    'src/sass/**/*.scss'
                ],
                tasks: ['sass']
            }
        }

        , sass: {
            options: {
                implementation: require('node-sass')
            },

            main: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/sass/',      // Src matches are relative to this path.
                        src: ['*.scss'], // Actual pattern(s) to match.
                        dest: 'web/css/',   // Destination path prefix.
                        ext: '.css',   // Dest filepaths will have this extension.
                        extDot: 'first'   // Extensions in filenames begin after the first dot
                    },
                ]
            }
        }
    };

    // Project configuration.
    grunt.initConfig(gruntConf);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', 'Sass and JS Compilation', function() {
        grunt.task.run('sass', 'webpack', 'watch');
    });

};
