let AddGamesController = function ($scope, ReviewService) {

  $scope.addReview = (obj) => {
    ReviewService.addReview(obj).then( (res) => {
      $scope.review = {};
    });
  };

};

AddGamesController.$inject = ['$scope', 'ReviewService'];


export default AddGamesController;
