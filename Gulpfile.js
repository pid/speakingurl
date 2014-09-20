var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

var paths = {
    lib: './lib/**/*.js',
    test: './test/**/*.js',
    json: '*.json',
    readme: './README.md',
    target: './speakingurl.min.js'
};

var banner = ['/**',
    ' * <%= pkg.name %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.licenses[0].type %>',
    ' * @author <%= pkg.author.name %>',
    ' */'
].join('\n');

gulp.task('beautify', function() {

    gulp.src(paths.lib)
        .pipe(plugins.jsbeautifier({
            config: '.jsbeautifyrc',
            mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./lib'));

    gulp.src(paths.test)
        .pipe(plugins.jsbeautifier({
            config: '.jsbeautifyrc',
            mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./test'));

    gulp.src(paths.json)
        .pipe(plugins.jsbeautifier({
            config: '.jsbeautifyrc',
            mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('mocha', function() {
    return gulp.src(paths.test, {
        read: false
    })
        .pipe(plugins.mocha({
            reporter: 'spec',
            globals: {
                should: require('should')
            }
        }));
});

gulp.task('jshint', function() {
    return gulp.src(paths.lib)
        .pipe(plugins.jshint('.jshintrc'), {
            verbose: true
        })
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('uglify', function() {
    gulp.src(paths.lib)
        .pipe(plugins.uglify())
        .pipe(plugins.header(banner, {
            pkg: pkg
        }))
        .pipe(plugins.rename(paths.target))
        .pipe(gulp.dest('./'));
});

gulp.task('replace', function() {

    gulp.src(paths.readme)
        .pipe(plugins.replace(
            /cdnjs.cloudflare.com\/ajax\/libs\/speakingurl\/\d{1,1}\.\d{1,2}\.\d{1,2}\/speakingurl.min.js/g,
            'cdnjs.cloudflare.com/ajax/libs/speakingurl/' + pkg.version +
            '/speakingurl.min.js'))
        .pipe(plugins.replace(
            /cdn.jsdelivr.net\/speakingurl\/\d{1,1}\.\d{1,2}\.\d{1,2}\/speakingurl.min.js/g,
            'cdn.jsdelivr.net/speakingurl/' +
            pkg.version + '/speakingurl.min.js'))
        .pipe(gulp.dest('./'));
});


gulp.task('bumpup', function() {

    gulp.src(paths.json)
        .pipe(plugins.bump({
            type: argv.major ? 'major' : (argv.minor ? 'minor' :
                'patch')
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('npm', function(done) {
    require('child_process').spawn('npm', ['publish'], {
        stdio: 'inherit'
    })
        .on('close', done);
});


gulp.task('release', ['beautify', 'jshint', 'mocha', 'uglify', 'bumpup',
    'replace'
], function() {
    var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
    var v = 'v' + pkg.version;
    var message = 'Release ' + v;

    gulp.src(paths.json)
        .pipe(plugins.bump({
            type: argv.major ? 'major' : (argv.minor ? 'minor' :
                'patch')
        }))
        .pipe(gulp.dest('./'))
        .pipe(plugins.git.add())
        .pipe(plugins.git.commit(message))
        .pipe(plugins.git.tag(v, message));
    plugins.git.push('origin', 'master', '--tags');
});



gulp.task('watch', function() {
    gulp.watch(['./*.js', 'lib/**/*.js'], ['jshint', 'beautify', 'mocha']);
});


gulp.task('default', ['jshint', 'beautify', 'mocha', 'replace']);