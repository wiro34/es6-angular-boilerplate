'use strict';

var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', $.shell.task([
  'jspm bundle-sfx src/app/app .tmp/bundle.js --skip-source-maps'
]));

//var Builder = require('systemjs-builder');
//var builder = new Builder();
//builder.loadConfig('src/system.config.js').then(function (e) {
//  try {
//    builder
//      .config({
//        "paths": {
//          "app/app": path.join(gulp.paths.src, "/app/app.js")
//        }
//      });
//  } catch (e) {
//    console.log(e);
//  }
//  var buildConfig = {
//    sfxFormat: 'global',
//    sfxEncoding: true,
//    sfxGlobals: {},
//    sfxGlobalName: null,
//    sourceMaps: true,
//    runtime: false
//  };
//
//  builder
//    .buildSFX('app/app', path.join(gulp.paths.tmp, '/bundle.js'), buildConfig)
//    .then(function () {
//      done();
//    })
//    .catch(function (err) {
//      console.log('Build error');
//      console.log(err);
//      done(err);
//    });
