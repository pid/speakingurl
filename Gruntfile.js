module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> v<%= pkg.version %> (c) 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <%= pkg.homepage %> */'
            },
            build: {
                src: '<%= buildSourceFile %>',
                dest: '<%= pkg.name %>.min.js'
            }
        },

        jshint: {
            options: {},
            src: ['Gruntfile.js', '<%= sourceFiles %>', '<%= jsonFiles %>', '<%= jsonFiles %>']
        },

        watch: {
            files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'package.json'],
            tasks: ['jshint', 'mocha', 'uglify']
        },

        jsbeautifier: {
            modify: {
                src: ['<%= sourceFiles %>', '<%= testFiles %>', '<%= jsonFiles %>'],
                options: {
                    config: '.jsbeautifyrc'
                }
            },
            verify: {
                src: ['<%= sourceFiles %>', '<%= testFiles %>', '<%= jsonFiles %>'],
                options: {
                    mode: 'VERIFY_ONLY',
                    config: '.jsbeautifyrc'
                }
            }
        },

        bumpup: ['package.json', 'bower.json', 'component.json', 'composer.json'],

        release: {
            options: {
                bump: false, //default: true
                tagName: 'v<%= version %>', //default: '<%= version %>'
                commitMessage: 'release v<%= version %>', //default: 'release <%= version %>'
                tagMessage: 'tagging version v<%= version %>' //default: 'Version <%= version %>'
            }
        },

        replace: {
            readme: {
                src: ['README.md'],
                overwrite: true,
                replacements: [{
                    from: /cdnjs.cloudflare.com\/ajax\/libs\/speakingurl\/\d{1,1}\.\d{1,2}\.\d{1,2}\/speakingurl.min.js/g,
                    to: 'cdnjs.cloudflare.com/ajax/libs/speakingurl/<%= pkg.version %>/speakingurl.min.js',
                }, {
                    from: /cdn.jsdelivr.net\/speakingurl\/\d{1,1}\.\d{1,2}\.\d{1,2}\/speakingurl.min.js/g,
                    to: 'cdn.jsdelivr.net/speakingurl/<%= pkg.version %>/speakingurl.min.js',
                }]
            }
        },

        // files
        buildSourceFile: 'lib/index.js',
        sourceFiles: 'lib/**/*.js',
        testFiles: 'test/**/*.js',
        jsonFiles: '*.json'
    });

    grunt.registerTask('mocha', 'run mocha', function() {
        var done = this.async();
        require('child_process')
            .exec('mocha', function(err, stdout) {
                grunt.log.write(stdout);
                done(err);
            });
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.log.writeln(filepath + ' has ' + action);
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-text-replace');

    // Default task(s).
    grunt.registerTask('default', ['jsbeautifier:modify', 'jshint', 'uglify', 'mocha', 'replace']);

};
