let SingleController = function ($scope, $http, $stateParams, PARSE) {

  let url = PARSE.URL + 'classes/reviews/' + stateParams.reviewId;

};

SingleController.$inject = ['$scope', '$http', '$stateParams', 'PARSE'];

export default SingleController;
