'use strict';

var path = require('path');
var gulp = require('gulp');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === gulp.paths.src || (util.isArray(baseDir) && baseDir.indexOf(gulp.paths.src) !== -1)) {
    routes = {
      '/jspm_packages': 'jspm_packages'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line bellow.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser,
    open: false
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([gulp.paths.tmp, gulp.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(gulp.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([gulp.paths.tmp, gulp.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(gulp.paths.dist, []);
});
