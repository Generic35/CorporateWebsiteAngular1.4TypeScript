namespace sitecoreReferenceApp {
    'use strict';
      
    class HomeController {
        public pageTitle: string;
        public recentWork: any;
        constructor(public dummyData){
            this.pageTitle = "Home";
            this.recentWork = dummyData.recentWorks;  
        }
    }
    
    angular.module('SitecoreReferenceApp').controller("HomeController", HomeController);
}