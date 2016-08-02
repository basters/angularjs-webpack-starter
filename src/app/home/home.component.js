(function (angular) {
  'use strict';

  HomeController.$inject = ['Example'];
  function HomeController(Example) {
    console.log('home');
    Example.sayHello();
  }

  angular.module('aws.home').component('home', {
    templateUrl: require('./home.component.html'),
    controller: HomeController
  })
})(window.angular);
