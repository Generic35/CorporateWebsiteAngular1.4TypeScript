namespace sitecoreReferenceApp {
    'use strict';
    
    function clientComments(restData : IRestData): angular.IDirective{
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/clientComments.html',
            controller: function($scope: any, restData): void{
                restData.clientComments()
                .$promise
                .then((result: any) => { $scope.clientComments = result; })
                .catch((result: any) => { console.log('failure', result); }); 
             }
        }
    }
    
    angular.module('SitecoreReferenceApp').directive('clientComments', clientComments);
}