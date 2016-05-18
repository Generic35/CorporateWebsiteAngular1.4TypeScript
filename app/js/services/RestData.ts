namespace sitecoreReferenceApp {
    'use strict'
    
    export interface IRestData {
        clientComments(): any;
        locations(): any;
        recentWorks(): any;
        services(): any;
        teamMemberProfiles(): any; 
    }
    
    class RestData implements IRestData {
        private clientCommentsUrl: string = '/data/clientComments';
        private locationsUrl: string = '/data/locations'; 
        private recentWorksUrl: string = '/data/recentWorks';
        private servicesUrl: string = '/data/services';
        private teamMemberProfilesUrl: string = '/data/teamMemberProfiles';
        
        constructor(public $resource : angular.resource.IResourceService ) {}
        
        public clientComments(): any { return this.setupResource(this.clientCommentsUrl).query()}
        public locations(): any { return this.setupResource(this.locationsUrl).query()}
        public recentWorks(): any { return this.setupResource(this.recentWorksUrl).query()}
        public services(): any { return this.setupResource(this.servicesUrl).query()}
        public teamMemberProfiles(): any { return this.setupResource(this.teamMemberProfilesUrl).query()}
            
        private setupResource(url: string): ng.resource.IResourceClass<ng.resource.IResource<any>> {
            return this.$resource(url + '/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
        }
    }
    
    angular.module('SitecoreReferenceApp').service('restData', RestData);
}