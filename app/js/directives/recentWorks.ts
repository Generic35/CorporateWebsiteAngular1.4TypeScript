namespace sitecoreReferenceApp{
    'use strict';
    
    function recentWorks(restData: IRestData): angular.IDirective{
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/recentWorks.html',
            controller: function($scope: any, restData): void{
                restData.recentWorks()
                .$promise
                .then((result: any) => { $scope.recentWorks = result; })
                .catch((result: any) => { console.log('failure', result)}); 
            }
        }
    }
    
    angular.module('SitecoreReferenceApp').directive('recentWorks', recentWorks);
}