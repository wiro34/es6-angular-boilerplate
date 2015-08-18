'use strict';

var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var sassOptions = {
  style: 'expanded',
  includePaths: [
    './src',
    './jspm_packages/github',
    './jspm_packages/npm'
  ]
};

gulp.task('styles', function () {
  return gulp.src([
    path.join(gulp.paths.src, '**/*.scss')
  ])
    .pipe($.cached('sass'))
    .pipe($.plumber({errorHandler: gulp.errorHandler}))
    .pipe($.changed(path.join(gulp.paths.tmp, '/serve'), {extension: '.css'}))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(gulp.paths.tmp))
    .pipe(browserSync.reload({stream: true}));
});
