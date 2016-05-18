var sitecoreReferenceApp;
(function (sitecoreReferenceApp) {
    'use strict';
    function teamMemberProfiles(restData) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/teamMemberProfiles.html',
            controller: function ($scope, restData) {
                restData.teamMemberProfiles()
                    .$promise
                    .then(function (result) { $scope.teamMemberProfiles = result; })
                    .catch(function (result) { console.log('failure', result); });
            }
        };
    }
    angular.module('SitecoreReferenceApp').directive('teamMemberProfiles', teamMemberProfiles);
})(sitecoreReferenceApp || (sitecoreReferenceApp = {}));
