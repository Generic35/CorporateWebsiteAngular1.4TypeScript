namespace sitecoreReferenceApp {
    'use strict';
    
    function ourServices(restData: IRestData): angular.IDirective{
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/ourServices.html',
            controller: function($scope: any, restData): void{
                restData.services()
                .$promise
                .then((result: any) => { $scope.services = result; })
                .catch((result: any) => { console.log('failure', result); }); 
            }    
        }
    }

    angular.module('SitecoreReferenceApp').directive('ourServices', ourServices);
}