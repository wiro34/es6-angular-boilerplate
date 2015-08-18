export default function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/views/main.html'
    });

  $urlRouterProvider.otherwise('/');
};
