var sitecoreReferenceApp;
(function (sitecoreReferenceApp) {
    'use strict';
    var HomeController = (function () {
        function HomeController(dummyData) {
            this.dummyData = dummyData;
            this.pageTitle = "Home";
            this.recentWork = dummyData.recentWorks;
        }
        return HomeController;
    }());
    angular.module('SitecoreReferenceApp').controller("HomeController", HomeController);
})(sitecoreReferenceApp || (sitecoreReferenceApp = {}));
