'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngAnimate', 'ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/rsvp', {templateUrl: 'partials/rsvp.html', controller: 'RsvpCtrl'}).
    when('/story', {templateUrl: 'partials/story.html', controller: 'StoryCtrl'}).
    when('/venue', {templateUrl: 'partials/venue.html', controller: 'VenueCtrl'}).
    when('/photos', {templateUrl: 'partials/photos.html', controller: 'PhotosCtrl'}).
    when('/travel', {templateUrl: 'partials/travel.html', controller: 'TravelCtrl'}).
    when('/accomodation', {templateUrl: 'partials/accomodation.html', controller: 'AccomodationCtrl'}).
    otherwise({redirectTo: '/rsvp'});
  }]).
  run(['$rootScope', '$location',function ($rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
      $rootScope.currentPage = $location.path().replace(/\//gi,'')
  });
}])
