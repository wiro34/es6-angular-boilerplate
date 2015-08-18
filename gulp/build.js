'use strict';

var path = require('path');
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
  return gulp.src([
    path.join(gulp.paths.src, '/app/**/*.html'),
    path.join(gulp.paths.tmp, '/app/**/*.html')
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'ES6Angular',
      root: 'app'
    }))
    .pipe(gulp.dest(gulp.paths.tmp));
});

gulp.task('html', ['scripts', 'inject', 'partials'], function () {
  var partialsInjectFile = gulp.src(path.join(gulp.paths.tmp, '/templateCacheHtml.js'), {read: false});
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: gulp.paths.tmp,
    addRootSlash: false
  };
  var bundleInjectFile = gulp.src(path.join(gulp.paths.tmp, '/bundle.js'), {read: false});
  var bundleInjectOptions = {
    starttag: '<!-- inject:bundle -->',
    ignorePath: gulp.paths.tmp,
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src(path.join(gulp.paths.tmp, '/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.inject(bundleInjectFile, bundleInjectOptions))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense})).on('error', gulp.errorHandler)
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.replace('/jspm_packages/github/twbs/bootstrap-sass@3.3.5/assets/fonts/bootstrap/', '../fonts/'))
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      conditionals: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(path.join(gulp.paths.dist, '/')))
    .pipe($.size({title: path.join(gulp.paths.dist, '/'), showFiles: true}));
});

gulp.task('fonts', function () {
  return gulp.src([
    './jspm_packages/github/**/*',
    './jspm_packages/npm/**/*'
  ])
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(gulp.paths.dist, '/fonts/')));
});

gulp.task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(gulp.paths.src, '/**/*'),
    path.join('!' + gulp.paths.src, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(gulp.paths.dist, '/')));
});

gulp.task('clean', function (done) {
  $.del([path.join(gulp.paths.dist, '/'), path.join(gulp.paths.tmp, '/')], done);
});

gulp.task('build', ['html', 'fonts', 'other']);
