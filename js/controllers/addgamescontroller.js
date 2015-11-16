let AddGamesController = function ($scope, ReviewService) {

  $scope.addReview = (obj) => {
    ReviewService.addReview(obj).then( (res) => {
      $scope.game = {};
    });
  };

};

AddGamesController.$inject = ['$scope', 'ReviewService'];


export default AddGamesController;
