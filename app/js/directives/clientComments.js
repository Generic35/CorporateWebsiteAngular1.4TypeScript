var sitecoreReferenceApp;
(function (sitecoreReferenceApp) {
    'use strict';
    function clientComments(restData) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/clientComments.html',
            controller: function ($scope, restData) {
                restData.clientComments()
                    .$promise
                    .then(function (result) { $scope.clientComments = result; })
                    .catch(function (result) { console.log('failure', result); });
            }
        };
    }
    angular.module('SitecoreReferenceApp').directive('clientComments', clientComments);
})(sitecoreReferenceApp || (sitecoreReferenceApp = {}));
