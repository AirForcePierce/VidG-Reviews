let SingleGameController = function($scope, $stateParams, $http, PARSE) {

  let url = PARSE.URL + 'classes/reviews/' + $stateParams.reviewId;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singleGame = res.data;

  });

};

SingleGameController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleGameController;
