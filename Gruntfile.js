module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <%= pkg.homepage %> */\n'
      },
      build: {
        src: '<%= buildSourceFile %>',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      src: ['Gruntfile.js', '<%= sourceFiles %>', '<%= testFiles %>']
    },
    watch: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'package.json'],
      tasks: ['jshint', 'mocha', 'uglify']
    },
    bumpup: ['package.json', 'bower.json'],

    // files
    buildSourceFile: 'lib/index.js',
    sourceFiles: 'lib/**/*.js',
    testFiles: 'test/**/*.js'
  });

  // Alias task for release
  grunt.registerTask('release', function (type) {
      type = type ? type : 'patch';     // Set the release type
      grunt.task.run('jshint');         // Lint stuff
      grunt.task.run('uglify');         // Minify stuff
      grunt.task.run('mocha');          // test 
      grunt.task.run('bumpup:' + type); // Bump up the version
  });

  grunt.registerTask('mocha', 'run mocha', function () {
    var done = this.async();
    require('child_process')
      .exec('mocha', function (err, stdout) {
      grunt.log.write(stdout);
      done(err);
    });
  });

  grunt.event.on('watch', function (action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bumpup');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'mocha']);

};