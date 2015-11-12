let VidGamesController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/reviews';


  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.reviews = res.data.results;
  });

};

VidGamesController.$inject = ['$scope', '$http', 'PARSE'];

export default VidGamesController;
