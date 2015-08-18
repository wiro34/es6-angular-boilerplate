'use strict';

import 'jquery';

import angular from 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-bootstrap';

import 'marceljuenemann/angular-drag-and-drop-lists';
import 'gsklee/ngStorage';

import appConfig from './app.config';
import appRoutes from './app.route';
import appRunBlock from './app.run';

import NewTaskDialog from './components/newTaskDialog/newTaskDialog.service';
import NavbarDirective from './components/navbar/navbar.directive';
import SwimLaneDirective from './components/swimLane/swimLane.directive';
import SwimLaneContainerDirective from './components/swimLane/swimLaneContainer.directive';
import Tasks from './components/tasks/tasks.value';

import taskStoreRunBlock from './components/tasks/taskStore.run';

angular.module('ES6Angular', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'dndLists',
  'ngStorage'
])
  .config(appConfig)
  .config(appRoutes)
  .run(appRunBlock)
  .run(taskStoreRunBlock)

  .service('NewTaskDialog', NewTaskDialog.activate)

  .directive('es6SampleNavbar', NavbarDirective.activate)
  .directive('es6SampleSwimLaneContainer', SwimLaneContainerDirective.activate)
  .directive('es6SampleSwimLane', SwimLaneDirective.activate)

  .value('Tasks', Tasks)
;

angular.element(document).ready(()=> {
  angular.bootstrap(document, ['ES6Angular']);
});
