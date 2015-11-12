let SingleGameController = function($scope, $stateParams, ReviewService) {
  ReviewService.getReview($stateParams.reviewId).then( (res) =>{
    $scope.singleGame = res.data;
  });

};

SingleGameController.$inject = ['$scope', '$stateParams', 'ReviewService'];

export default SingleGameController;
