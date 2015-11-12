let AddGamesController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/reviews';

  let GameReview = function (obj) {
    this.title = obj.title;
    this.year = obj.year;
    this.reviewtext = obj.reviewtext;
    this.score = obj.score;
    this.image_url = obj.image_url;
  };

  $scope.addReview = (obj) => {
    let vg = new GameReview(obj);
    $http.post(url, vg, PARSE.CONFIG).then( (res) => {
      $scope.game = {};
    });
  };

};

AddGamesController.$inject = ['$scope', '$http', 'PARSE'];


export default AddGamesController;
