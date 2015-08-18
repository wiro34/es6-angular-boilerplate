'use strict';

var path = require('path');
var gulp = require('gulp');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    path.join(gulp.paths.src, 'app/**/*.scss')
  ], function (event) {
    if (isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch([
    path.join(gulp.paths.src, '/app/**/*.html'),
    path.join(gulp.paths.src, '/app/**/*.js')
  ], function (event) {
    browserSync.reload(event.path);
  });
});


//gulp.task('watch', ['scripts:watch', 'inject'], function () {
//
//  gulp.watch([path.join(gulp.paths.src, '/*.html'), 'bower.json'], ['inject']);
//
//  gulp.watch([
//    path.join(gulp.paths.src, '/app/**/*.css'),
//    path.join(gulp.paths.src, '/app/**/*.scss')
//  ], function(event) {
//    if(isOnlyChange(event)) {
//      gulp.start('styles');
//    } else {
//      gulp.start('inject');
//    }
//  });
//
//
//  gulp.watch(path.join(gulp.paths.src, '/app/**/*.html'), function(event) {
//    browserSync.reload(event.path);
//  });
//});
