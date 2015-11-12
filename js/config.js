let config = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.vidgames', {
      url: '/reviews',
      controller: 'VidGamesController',
      templateUrl: 'templates/videogames.tpl.html'
    })
    .state('root.single', {
      url: '/single/:reviewId',
      controller: 'SingleGameController',
      templateUrl: 'templates/singlegame.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddGamesController',
      templateUrl: 'templates/add.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
