/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

gulp.autoReload = true;

///**
// *  Wiredep is the lib which inject bower dependencies in your project
// *  Mainly used to inject script tags in the index.html but also used
// *  to inject css preprocessor deps and js files in karma
// */
//gulp.wiredep = {
//  exclude: [/bootstrap.js$/, /bootstrap-sass-official\/.*\.js/, /bootstrap\.css/],
//  directory: 'bower_components'
//};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
gulp.errorHandler = function (err) {
  gutil.log(err.toString());
  this.emit('end');
};


/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
