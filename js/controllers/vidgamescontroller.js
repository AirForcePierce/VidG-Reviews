let VidGamesController = function ($scope, ReviewService) {

  ReviewService.getReviews().then( (res) => {
    $scope.reviews = res.data.results;
  });


};

VidGamesController.$inject = ['$scope', 'ReviewService'];

export default VidGamesController;
