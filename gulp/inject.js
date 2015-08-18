'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

gulp.task('inject', ['styles'], function () {
  var injectFiles = gulp.src([
    path.join(gulp.paths.tmp, '/app/**/*.css'),
    path.join('!' + gulp.paths.tmp, '/app/vendor.css')
  ], {read: false});

  var vendorInjectFiles = gulp.src([
    path.join(gulp.paths.tmp, '/app/vendor.css')
  ], {read: false});

  var injectOptions = {
    ignorePath: gulp.paths.tmp,
    addRootSlash: false
  };

  var vendorInjectOptions = {
    name: 'inject:vendor',
    ignorePath: gulp.paths.tmp,
    addRootSlash: false
  };

  return gulp.src([
    path.join(gulp.paths.src, '/*.html')
  ])
    .pipe($.inject(vendorInjectFiles, vendorInjectOptions))
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(gulp.dest(gulp.paths.tmp))
    .pipe(browserSync.reload({stream: true}));
});
