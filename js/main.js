import angular from 'angular';
import 'angular-ui-router';
import VidGamesController from './controllers/vidgamescontroller';
import AddGamesController from './controllers/addgamescontroller';
import SingleGameController from './controllers/singlegamecontroller';

import ReviewService from './services/reviewservice';
// import foundation from 'foundation-sites';
// import angular-aria from 'angular-aria';
// import angular-animate from 'angular-animate';
// import angular-material from 'angular-material';

import config from './config';



angular
.module('app', ['ui.router'])
.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {
      'X-Parse-Application-Id': 'v1bGGCFp94amHw951w09Gememp8h32G3H7THgoC7',
      'X-Parse-REST-API-Key': '6VibkLGy4gLJMaB9hkBDnnsBYuSYc7D0yNvWFiYo'
    }
  }
})
.config(config)
.controller('VidGamesController', VidGamesController)
.controller('AddGamesController', AddGamesController)
.controller('SingleGameController', SingleGameController)
.service('ReviewService', ReviewService)
;
