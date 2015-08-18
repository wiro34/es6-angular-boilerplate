import _ from 'lodash';

export default function ($rootScope, $log, $localStorage, Tasks) {
  'ngInject';

  if (angular.isObject($localStorage.tasks) && !_.isEmpty($localStorage.tasks)) {
    angular.copy($localStorage.tasks, Tasks);
    $log.debug('Tasks are loaded.');
  }

  $rootScope.$watch(() => Tasks, (tasks) =>$localStorage.tasks = tasks, true);
};
