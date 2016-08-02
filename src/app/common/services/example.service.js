(function (angular) {
  'use strict';

  function ExampleService() {
    this.sayHello = function () {
      alert('hello');
    }
  }

  angular.module('aws.common').service('Example', ExampleService);

})(window.angular);
