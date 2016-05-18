namespace sitecoreReferenceApp {
    'use strict';
    
    function locations(restData: IRestData): angular.IDirective {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/locations.html',
            controller: function($scope: any, restData): void{
                restData.locations()
                .$promise
                .then((result: any) => { $scope.locations = result;})
                .catch((result: any) => { console.log('failure', result);}); 
            }
        }   
    }
    
    angular.module('SitecoreReferenceApp').directive('locations', locations);
}