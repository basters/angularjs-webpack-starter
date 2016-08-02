(function (angular) {
    'use strict';

    configFn.$inject = [];

    function configFn () {
    }

    runFn.$inject = [];
    function runFn () {
    }

    var deps = [
      'aws.home',
      'aws.common'
    ];


    angular.module('aws', deps)
      .config(configFn)
      .run(runFn);

})(window.angular);


require('./app/home/_module');
require('./app/common/_module');
