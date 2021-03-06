'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    brfs = require('brfs'),
    paths = {
        src : {
            scriptsEntry: './app/scripts/app.js',
            html: 'app/**/*.html',
            scripts: 'app/scripts/**/*.js',
            css: 'app/css/style.css'
        },
        dist : {
            scripts: 'bundle.js',
            dir: 'dist'
        }
    };


// Watch Files For Changes & Reload
gulp.task('default', [
    'build-scripts',
    'copy-static',
    'connect',
    'watch'
]);

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        root: paths.dist.dir
    });
});

gulp.task('build-scripts', function () {
    browserify({
      entries: paths.src.scriptsEntry,
      debug: true
    })
    .transform({
       global: true
    }, brfs)
    .bundle()
    .pipe(source(paths.dist.scripts))
    .pipe(gulp.dest(paths.dist.dir))
    .pipe(connect.reload());
});

gulp.task('copy-static', function () {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.dist.dir))
        .pipe(connect.reload());
    gulp.src(paths.src.css)
        .pipe(gulp.dest(paths.dist.dir))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(paths.src.html, ['copy-static', 'build-scripts']);
    gulp.watch(paths.src.css, ['copy-static']);
    gulp.watch(paths.src.scripts, ['build-scripts']);
});