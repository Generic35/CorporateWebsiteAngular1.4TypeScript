namespace sitecoreReferenceApp {
    'use strict';
    
    function teamMemberProfiles(restData: IRestData){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/teamMemberProfiles.html',
            controller: function($scope, restData): void{
                restData.teamMemberProfiles()
                .$promise
                .then((result: any) => { $scope.teamMemberProfiles = result; })
                .catch((result: any) => { console.log('failure', result)}); 
            }
        }
    }
    angular.module('SitecoreReferenceApp').directive('teamMemberProfiles', teamMemberProfiles);
}