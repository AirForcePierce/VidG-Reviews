let ReviewService = function ($http, PARSE) {

  let url = PARSE.URL + 'classes/reviews';

  let checkAuth = function () {
      return true;
    };

  this.getReviews = function () {
    if (checkAuth()){
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getReview = function (reviewId) {
    if (checkAuth()) {
      return $http({
        url: url + '/' + reviewId,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  let GameReview = function (obj) {
    this.title = obj.title;
    this.year = obj.year;
    this.reviewtext = obj.reviewtext;
    this.score = obj.score;
    this.image_url = obj.image_url;
  };

  this.addReview = function (obj) {
    let vg = new GameReview(obj);
    return $http.post(url, vg, PARSE.CONFIG);
  };


};

ReviewService.$inject = ['$http', 'PARSE'];

export default ReviewService;
