let config = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.vidgames', {
      url: '/',
      controller: 'VidGamesController',
      templateUrl: 'templates/videogames.tpl.html'
    })
    .state('root.single', {
      url: '/single/:reviewsId',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddGamesController',
      templateUrl: 'templates/add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
