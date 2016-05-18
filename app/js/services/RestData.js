var sitecoreReferenceApp;
(function (sitecoreReferenceApp) {
    'use strict';
    var RestData = (function () {
        function RestData($resource) {
            this.$resource = $resource;
            this.clientCommentsUrl = '/data/clientComments';
            this.locationsUrl = '/data/locations';
            this.recentWorksUrl = '/data/recentWorks';
            this.servicesUrl = '/data/services';
            this.teamMemberProfilesUrl = '/data/teamMemberProfiles';
        }
        RestData.prototype.clientComments = function () { return this.setupResource(this.clientCommentsUrl).query(); };
        RestData.prototype.locations = function () { return this.setupResource(this.locationsUrl).query(); };
        RestData.prototype.recentWorks = function () { return this.setupResource(this.recentWorksUrl).query(); };
        RestData.prototype.services = function () { return this.setupResource(this.servicesUrl).query(); };
        RestData.prototype.teamMemberProfiles = function () { return this.setupResource(this.teamMemberProfilesUrl).query(); };
        RestData.prototype.setupResource = function (url) {
            return this.$resource(url + '/:id', { id: '@id' }, { "getAll": { method: "GET", isArray: true, params: { something: "foo" } } });
        };
        return RestData;
    }());
    angular.module('SitecoreReferenceApp').service('restData', RestData);
})(sitecoreReferenceApp || (sitecoreReferenceApp = {}));
